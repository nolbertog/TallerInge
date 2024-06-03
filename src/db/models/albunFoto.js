const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Proyecto = require('./proyecto')

const AlbunFoto = sequelize.define('AlbunFoto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    namePhoto: {
        type: DataTypes.STRING,
        allowNull: false, // Asegura que el campo no sea nulo
        validate: {
            notEmpty: true, // Asegura que el campo no esté vacío
        },
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isUrl: true, // Asegura que el campo sea una URL válida
        },
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Proyecto,
            key: "id",
        },
    },
}, { tableName: 'TBD_ALBUN_FOTO' });

module.exports = AlbunFoto;
