const express = require('express');
const routerlogin = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers'); 
const permission = require('../midleware/verificarPermisos');

routerlogin.use(express.json());


routerlogin.post('/login', usuarioControllers.iniciarSesion);



module.exports = routerlogin;
