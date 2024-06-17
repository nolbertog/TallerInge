const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('../proyects/proyecto')


const Evidencia = sequelize.define('Evidencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nameEvidence: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references:{
            model: Proyecto,
            key: 'id',
        }
    },
    
    
}, { tableName: 'TBD_EVIDENCIAS' });

module.exports = Evidencia;
