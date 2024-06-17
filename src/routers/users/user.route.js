const express = require('express');
const routerusuario = express.Router();
const usuarioControllers = require('../../controllers/users/usuario.controller');
const permission = require('../../middleware/verificarPermisos');

routerusuario.use(express.json());

routerusuario.post('/usuario', usuarioControllers.crearUsuario);
routerusuario.get('/usuario',permission([1,2,3,5]), usuarioControllers.obtenerUsuarios); 
routerusuario.get('/usuario/:id',permission([1,2,3,5]), usuarioControllers.obtenerUsuarioPorId); 
routerusuario.put('/usuario/:id',permission([1,2,3,5]), usuarioControllers.actualizarUsuario);
routerusuario.delete('/usuario/:id',permission([1,2,3,5]), usuarioControllers.eliminarUsuario);

module.exports = routerusuario;
