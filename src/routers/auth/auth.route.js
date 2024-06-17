const express = require('express');
const routerlogin = express.Router();
const usuarioControllers = require('../../controllers/users/usuario.controller');
const permission = require('../../middleware/verificarPermisos');

routerlogin.use(express.json());


routerlogin.post('/login', usuarioControllers.iniciarSesion);



module.exports = routerlogin;
