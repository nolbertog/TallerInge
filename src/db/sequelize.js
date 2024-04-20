// sequelize.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await sequelize.sync(); 
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = { sequelize, syncDatabase };
