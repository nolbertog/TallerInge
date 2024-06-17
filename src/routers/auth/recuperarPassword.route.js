const express = require('express');
const routerRecuperarPassword = express.Router();
const usuarioControllers = require('../../controllers/users/usuario.controller');
const permission = require('../../middleware/verificarPermisos');

routerRecuperarPassword.use(express.json());


routerRecuperarPassword.post('/recuperarPassword', usuarioControllers.recuperarPassword);


module.exports = routerRecuperarPassword;
