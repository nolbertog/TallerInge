const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Usuario = require('./user');
const Proyecto = require('../proyects/proyecto')
const Rol = require('./rol')

const ListadoProfesorParticipante = sequelize.define('ListadoProfesorParticipante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario, 
            key: 'id' 
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: Rol, 
            key: 'id' 
        }
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto, 
            key: 'id' 
        }
    },
}, { tableName: 'TBD_LISTADO_PROFESOR_PARTICIPANTE' });

module.exports = ListadoProfesorParticipante;
