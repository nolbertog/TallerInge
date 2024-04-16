const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Region = require('./region')
const Ciudad = require('./ciudad')
const Comuna = require('./comuna')


const Direccion = sequelize.define('Direccion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    street: {
        type: DataTypes.STRING,
    },
    departament: {
        type: DataTypes.STRING,
    },
    house_nunber: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
    id_region: {
        type: DataTypes.INTEGER,
        references: {
            model: Region, 
            key: 'id' 
        }
    },
    id_city: {
        type: DataTypes.INTEGER,
        references: {
            model: Ciudad, 
            key: 'id' 
        }
    },
    id_commune: {
        type: DataTypes.INTEGER,
        references: {
            model: Comuna, 
            key: 'id' 
        }
    },
    
    
}, { tableName: 'TBD_ACTIVIDADES_COMPROMETIDAS' });

module.exports = Direccion;
