// models/usuario.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    rol: {
        type: DataTypes.STRING,
    },
    
});

module.exports = Usuario;
