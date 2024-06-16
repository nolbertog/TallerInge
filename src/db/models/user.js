const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');
const Rol = require('./rol');
const Carrera = require('./carrera');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rut: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    id_career: {
        type: DataTypes.INTEGER,
        references: {
            model: Carrera, 
            key: 'id',
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: Rol, 
            key: 'id',
        }
    },
    primaryEmail: {
        type: DataTypes.STRING,
    },
    secundaryEmail: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },

    resetToken: {
        type: DataTypes.STRING,
    },
}, { 
    tableName: 'TBD_USUARIOS',
    hooks: {
        beforeCreate: async (usuario, options) => {
            const hashedPassword = await bcrypt.hash(usuario.password, 10); 
            usuario.password = hashedPassword;
        }
    }
});

module.exports = Usuario;
