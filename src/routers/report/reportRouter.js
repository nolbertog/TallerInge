const express = require('express');
const routerReport = express.Router();
const Proyecto = require('../../db/models/proyects/proyecto');
const Usuario = require('../../db/models/users/user');
const {Sequelize} = require('sequelize');

// Definicion la relación
Proyecto.belongsTo(Usuario, { foreignKey: 'id_solicitante' });

// Ruta para obtener todos los proyectos con el nombre del solicitante
routerReport.get('/proyectosReport', async (req, res) => {
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
            include: [{
                model: Usuario,
                attributes: []
            }]
        });
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = routerReport;
