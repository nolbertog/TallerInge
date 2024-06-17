const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Carrera = require('./carrera');
const Proyecto = require('../proyects/proyecto')
const Responsable = require('../users/user')

const AsignaturaParticipante = sequelize.define('AsignaturaParticipante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_asignature: {
        type: DataTypes.STRING,
    },
    id_carrera: {
        type: DataTypes.INTEGER,
        references: {
            model: Carrera, 
            key: 'id' 
        }
    },
    id_profResponsable: {
        type: DataTypes.INTEGER,
        references: {
            model: Responsable, 
            key: 'id' 
        }
    },
    year: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto, 
            key: 'id' 
        }
    },
}, { tableName: 'TBD_ASIGNATURASPARTICIPANTES' });

module.exports = AsignaturaParticipante;
