const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('./proyecto');


const RecursosComprometido = sequelize.define('RecursosComprometido', {
    rut: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_recurso: {
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
}, { tableName: 'TBD_RECURSOS_COMPROMETIDOS' });

module.exports = RecursosComprometido;
