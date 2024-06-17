const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Ciudad = sequelize.define('Ciudad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_city: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_CIUDADES' });

module.exports = Ciudad;
