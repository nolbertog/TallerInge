const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');


const Alineamiento = sequelize.define('Alineamiento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_alineamiento: {
        type: DataTypes.STRING,
    },
    resultadoProyecto: {
        type: DataTypes.STRING,
    },
    
}, { tableName: 'TBD_ALINEAMIENTOS' });

module.exports = Alineamiento;
