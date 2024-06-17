const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('../proyects/proyecto')


const Documento = sequelize.define('Documento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nameDocument: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references:{
            model: Proyecto,
            key: "id",
        }
    },
    
}, { tableName: 'TBD_DOCUMENTS' });

module.exports = Documento;
