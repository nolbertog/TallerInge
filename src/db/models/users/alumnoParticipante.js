const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Carrera = require('../ucm/carrera');
const AsignaturaParticipante = require('../ucm/asignaturaParticipante')


const AlumnoParticipante = sequelize.define('AlumnosParticipantes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_alumno: {
        type: DataTypes.STRING,
    },
    id_carrera: {
        type: DataTypes.INTEGER,
        references: {
            model: Carrera, 
            key: 'id' 
        }
    },
    id_asignaturaParticipante: {
        type: DataTypes.INTEGER,
        references: {
            model: AsignaturaParticipante, 
            key: 'id' 
        }
    },
}, { tableName: 'TBD_ALUMNOS_PARTICIPANTES' });

module.exports = AlumnoParticipante;
