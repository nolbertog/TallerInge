const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Comuna = sequelize.define('Comuna', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_commune: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_COMUNAS' });

module.exports = Comuna;
