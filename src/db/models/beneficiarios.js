const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Proyecto = require('./proyecto')


const Beneficiario = sequelize.define('Beneficiario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_beneficiario: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    rut: {
        type: DataTypes.STRING,
    },
    sexo: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.STRING,
        references:{
            model: Proyecto,
            key: id,
        }
    },
}, { tableName: 'TBD_BENEFICIARIOS' });

module.exports = Beneficiario;
