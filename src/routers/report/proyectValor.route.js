const express = require('express');
const routerReport = express.Router();
const Proyecto = require('../../db/models/proyects/proyecto');
const Usuario = require('../../db/models/users/user');
const { Sequelize } = require('sequelize');
const Etapa = require('../../db/models/proyects/etapa');
const permission = require('../../middleware/verificarPermisos');

// Definición de la relación
Proyecto.belongsTo(Usuario, { foreignKey: 'id_solicitante' });
Proyecto.belongsTo(Etapa, { foreignKey: 'id_stage' });

// Ruta para obtener todos los proyectos con el nombre del solicitante y filtrando por etapa
routerReport.get('/proyectosValor/:etapa', permission([1, 2, 3, 4, 5, 6]), async (req, res) => {
    const { etapa } = req.params;

    try {
        const proyectos = await Proyecto.findAll({
            attributes: [
                'id_stage',
                [Sequelize.fn('SUM', Sequelize.col('totalDineroAprobacion')), 'TotalMontoAprobado']
            ],
            include: [
                {
                    model: Usuario,
                    attributes: []
                },
                {
                    model: Etapa,
                    attributes: ['name_stage'],
                    where: etapa ? { name_stage: etapa } : {}
                }
            ],
            group: ['id_stage', 'Etapa.id']
        });

        const formatter = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        const formattedProyectos = proyectos.map(proyecto => ({
            ...proyecto.dataValues,
            TotalMontoAprobado: `${formatter.format(Math.round(proyecto.dataValues.TotalMontoAprobado || 0))} CLP`
        }));

        const totalAmount = proyectos.reduce((sum, proyecto) => sum + Math.round(proyecto.dataValues.TotalMontoAprobado || 0), 0);
        const formattedTotalAmount = `${formatter.format(totalAmount)} CLP`;

        res.json({ proyectos: formattedProyectos, Monto: formattedTotalAmount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = routerReport;
