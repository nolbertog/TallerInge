const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');


const Alcance = sequelize.define('Alcance', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_scope: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_FACULTADES' });

module.exports = Alcance;
