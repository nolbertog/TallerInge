const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');


const RestriccionAprobacion = sequelize.define('RestriccionAprobacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameRestriccion: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    
    
}, { tableName: 'TBD_RESTRICCION_APROBACION' });

module.exports = RestriccionAprobacion;
