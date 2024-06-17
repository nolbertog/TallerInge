const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Sedes= sequelize.define('Sedes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_headquarter: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_SEDES' });

module.exports = Sedes;
