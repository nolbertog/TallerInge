const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Region = sequelize.define('Region', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_region: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_REGIONES' });

module.exports = Region;
