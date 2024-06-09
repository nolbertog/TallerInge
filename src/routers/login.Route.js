const express = require('express');
const routerlogin = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers'); 

routerlogin.use(express.json());


routerlogin.post('/login', usuarioControllers.iniciarSesion);
routerlogin.post('/recuperarPassword', usuarioControllers.recuperarPassword);


module.exports = routerlogin;
