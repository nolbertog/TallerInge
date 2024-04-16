const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');


const Ambito = sequelize.define('Ambito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_ambit: {
        type: DataTypes.STRING,
    },
    
}, { tableName: 'TBD_AMBITOS' });

module.exports = Ambito;
