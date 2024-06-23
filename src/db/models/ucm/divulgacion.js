const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('../proyects/proyecto');


const Divulgacion = sequelize.define('Divulgacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_divulgacion: {
        type: DataTypes.STRING,
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto, 
            key: 'id' 
        }
    },
}, { tableName: 'TBD_DIVULGACIONES' });

module.exports = Divulgacion;
