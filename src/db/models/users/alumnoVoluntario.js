const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('../proyects/proyecto')


const AlumnoVoluntario = sequelize.define('ListadoAlumnosVoluntarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto, 
            key: 'id' 
        }
    },
}, { tableName: 'TBD_LISTADO_ALUMNOS_VOLUNTARIOS' });

module.exports = AlumnoVoluntario;
