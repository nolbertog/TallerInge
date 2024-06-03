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
    },
    url: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references:{
            model: Proyecto,
            key: "id",
        }
    },
    
    
    
}, { tableName: 'TBD_ALBUN_FOTO' });

module.exports = AlbunFoto;
