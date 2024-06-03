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
        allowNull: false,
        validate: {
            len: [2, 50] // Longitud mínima de 2 caracteres y máxima de 50 caracteres
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 // El valor debe ser un número positivo
        }
    },
    rut: {
        type: DataTypes.STRING,
    },
    sexo: {
        type: DataTypes.STRING,
    },
    id_proyect: {
        type: DataTypes.INTEGER,
        references:{
            model: Proyecto,
            key: "id",
        }
    },
}, { tableName: 'TBD_BENEFICIARIOS' });

module.exports = Beneficiario;
