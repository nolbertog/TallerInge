const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('./proyecto');


const FinanciamientoFuente = sequelize.define('FinanciamientoFuente', {
    rut: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_financiamiento_fuente: {
        type: DataTypes.STRING,
    },
    monto: {
        type: DataTypes.INTEGER,
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto, 
            key: 'id' 
        }
    },
}, { tableName: 'TBD_FUENTE_FINANCIAMIENTO' });

module.exports = FinanciamientoFuente;
