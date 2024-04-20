const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Facultad = require('./facultad');
const Hearquarter = require('./sede');
const Area = require('./area');

const Carrera = sequelize.define('Carrera', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_careers: {
        type: DataTypes.STRING,
    },
    id_facultie: {
        type: DataTypes.INTEGER,
        references: {
            model: Facultad, 
            key: 'id', 
        }
    },
    id_headquarter: {
        type: DataTypes.INTEGER,
        references: {
            model: Hearquarter, 
            key: 'id', 
        }
    },
    id_area: {
        type: DataTypes.INTEGER,
        references: {
            model: Area, 
            key: 'id',
        }
    },
    
}, { tableName: 'TBD_CARRERAS' });

module.exports = Carrera;
