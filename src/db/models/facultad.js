const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');


const Facultad = sequelize.define('Facultad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_facultie: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_FACULTADES' });

module.exports = Facultad;
