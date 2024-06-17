const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_role: {
        type: DataTypes.STRING,
    },
    
}, { tableName: 'TBD_ROL' });

module.exports = Rol;
