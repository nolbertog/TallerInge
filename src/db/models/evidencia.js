const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Proyecto = require('./proyecto')


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
        type: DataTypes.STRING,
        references:{
            model: Proyecto,
            key: id,
        }
    },
    
    
}, { tableName: 'TBD_EVIDENCIAS' });

module.exports = Evidencia;
