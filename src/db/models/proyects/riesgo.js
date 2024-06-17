const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Riesgo = sequelize.define('Riesgo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nameRiesgoAsociado: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_RIESGOS' });

module.exports = Riesgo;
