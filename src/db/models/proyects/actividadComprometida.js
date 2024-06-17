const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('./proyecto');

const ActividadComprometida = sequelize.define('ActividadesComprometidas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    id_proyect: { // Corregido el nombre del campo de referencia
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto,
            key: 'id',
        }
    },
}, { tableName: 'TBD_ACTIVIDADES_COMPROMETIDAS' });

module.exports = ActividadComprometida;
