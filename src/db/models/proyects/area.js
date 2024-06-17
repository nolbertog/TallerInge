const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Area = sequelize.define('Area', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_area: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_AREA' });

module.exports = Area;
