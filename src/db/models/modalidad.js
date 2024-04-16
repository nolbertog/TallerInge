const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');


const Modalidad = sequelize.define('Modalidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_modality: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_Modalidades' });

module.exports = Modalidad;
