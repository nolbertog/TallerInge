const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Proyecto = require('../proyects/proyecto')


const ColaboradorExtrerno = sequelize.define('ColaboradorExtrerno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_external_colaborador: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING,
    },
    name_external_colaborador: {
        type: DataTypes.INTEGER,
        references:{
            model: Proyecto,
            key: "id",
        }
    },
    
}, { tableName: 'TBD_COLABORADOR_EXTERNO' });

module.exports = ColaboradorExtrerno;
