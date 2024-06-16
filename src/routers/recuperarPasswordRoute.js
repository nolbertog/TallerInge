const express = require('express');
const routerRecuperarPassword = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers'); 
const permission = require('../midleware/verificarPermisos');

routerRecuperarPassword.use(express.json());


routerRecuperarPassword.post('/recuperarPassword', usuarioControllers.recuperarPassword);


module.exports = routerRecuperarPassword;
