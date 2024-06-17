const { DataTypes } = require('sequelize');
const { sequelize } = require('../../sequelize');


const EntidadPostulante = sequelize.define('EntidadPostulante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_postulant_entity: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    
}, { tableName: 'TBD_ENTIDAD_POSTULANTE' });

module.exports = EntidadPostulante;
