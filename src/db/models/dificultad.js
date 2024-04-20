const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');



const DificultadNivel = sequelize.define('DificultadNivel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_category: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_DIFICULTADES_NIVEL' });

module.exports = DificultadNivel;
