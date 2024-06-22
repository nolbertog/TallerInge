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
routerReport.get('/proyectosReport/:etapa', permission([1,2,3,4,6]), async (req, res) => {
    const { etapa } = req.params; // Get the stage from path parameters

    try {
        const proyectos = await Proyecto.findAll({
            attributes: [
                ['versionProyect', 'Versión del proyecto'],
                ['name_proyect', 'Nombre del proyecto'],
                ['email_solicitante', 'Email Solicitante'],
                [Sequelize.literal("CONCAT(Usuario.username, ' ', Usuario.lastname)"), 'Nombre solicitante'],
                ['totalDineroAprobacion', 'Monto Aprobado'],
                ['fechaejecucion', 'Fecha inicio del proyecto'],
                ['finaldate', 'Fecha termino proyecto']
            ],
            include: [
                {
                    model: Usuario,
                    attributes: []
                },
                {
                    model: Etapa,
                    attributes: [],
                    where: etapa ? { name_stage: etapa } : {}
                }
            ]
        });
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = routerReport;
