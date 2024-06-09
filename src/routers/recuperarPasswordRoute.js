const express = require('express');
const routerRecuperarPassword = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers'); 

routerRecuperarPassword.use(express.json());


routerRecuperarPassword.post('/recuperarPassword', usuarioControllers.recuperarPassword);


module.exports = routerRecuperarPassword;
