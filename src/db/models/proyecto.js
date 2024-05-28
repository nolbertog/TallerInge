
const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Usuario = require('./user');
const EntidadPostulante = require('./entidadPostulante');
const Alcance = require('./alcance');
const Ambito = require('./ambito');
const Riesgo = require('./riesgo');
const Alineamiento = require('./alineamiento');
const DificultadNivel = require('./dificultad')
const Etapa = require('./etapa')
const Aprobacion = require('./aprobaciones')
const RestriccionAprobacion = require('./restriccionAprobacion')
const Modalidad = require('./modalidad')


const Proyecto = sequelize.define('Proyecto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    versionProyect: {
        type: DataTypes.STRING,
    },
    name_proyect: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    id_solicitante: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id',
        }
    },
    date_input_solicitante: {
        type: DataTypes.DATE,
    },
    date_Update_solicitante: {
        type: DataTypes.DATE,
    },
    id_solicitante_entity: {
        type: DataTypes.INTEGER,
        references:{
            model: EntidadPostulante,
            key: 'id',
        }
    },
    telefono_solicitante: {
        type: DataTypes.STRING,
    },
    email_solicitante: {
        type: DataTypes.STRING,
    },
    id_scope: {
        type: DataTypes.INTEGER,
        references: {
            model: Alcance,
            key: 'id',
        }
    },
    id_ambit: {
        type: DataTypes.INTEGER,
        references:{
            model: Ambito,
            key: 'id',
        }
    },
    id_docenteRevisor: {
        type: DataTypes.INTEGER,
        references:{
            model: Usuario,
            key: 'id',
        }
    },
    recomendaciones: {
        type: DataTypes.STRING,
    },
    restriccciones: {
        type: DataTypes.STRING,
    },
    id_riesgoAsociado: {
        type: DataTypes.INTEGER,
        references:{
            model: Riesgo,
            key: 'id',
        }
    },
    id_alineamientoFacultad: {
        type: DataTypes.INTEGER,
        references:{
            model: Alineamiento,
            key: 'id',
        }
    },
    id_dificultyNivel: {
        type: DataTypes.INTEGER,
        references:{
            model: DificultadNivel,
            key: 'id',
        }
    },
    id_stage: {
        type: DataTypes.INTEGER,
        references:{
            model: Etapa,
            key: 'id',
        }
    },
    id_approbation: {
        type: DataTypes.INTEGER,
        references:{
            model: Aprobacion,
            key: 'id',
        }
    },
    fechaAprobacion: {
        type: DataTypes.DATE,
    },
    horaAprobacion: {
        type: DataTypes.TIME,
    },
    id_restriccionesAprobacion: {
        type: DataTypes.INTEGER,
        references:{
            model: RestriccionAprobacion,
            key: 'id',
        }
    },
    totalDineroAprobacion: {
        type: DataTypes.INTEGER,
    },
    recursosGastados: {
        type: DataTypes.INTEGER,
    },
    fechaejecucion: {
        type: DataTypes.DATE,
    },
    startDate: {
        type: DataTypes.DATE,
    },
    updateDate: {
        type: DataTypes.DATE,
    },
    id_modality: {
        type: DataTypes.INTEGER,
        references:{
            model: Modalidad,
            key: 'id',
        }
    },
    finalDate: {
        type: DataTypes.DATE,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
}, { tableName: 'TBD_PROYECTOS' });

module.exports = Proyecto;
