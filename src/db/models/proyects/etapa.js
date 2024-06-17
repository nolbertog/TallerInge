const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Etapa = sequelize.define('Etapa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_stage: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_ETAPAS' });

module.exports = Etapa;
