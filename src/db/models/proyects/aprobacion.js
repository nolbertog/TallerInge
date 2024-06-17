const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');
const Usuario = require('../users/user');


const Aprobacion = sequelize.define('Aprobacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_bossApprobation: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario, 
            key: 'id' 
        }
    },
    date_approbation: {
        type: DataTypes.DATE
    },
    descriptionApprobation: {
        type: DataTypes.STRING,
    },
    restrictionApprobation: {
        type: DataTypes.STRING,
    },
    
}, { tableName: 'TBD_APROBACIONES' });

module.exports = Aprobacion;
