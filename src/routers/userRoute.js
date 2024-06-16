const express = require('express');
const routerusuario = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers'); 
const permission = require('../midleware/verificarPermisos');

routerusuario.use(express.json());

routerusuario.post('/usuario',permission([1,2,3,4,5,6,7]), usuarioControllers.crearUsuario);
routerusuario.get('/usuario',permission([1,2,3,5]), usuarioControllers.obtenerUsuarios); 
routerusuario.get('/usuario/:id',permission([1,2,3,5]), usuarioControllers.obtenerUsuarioPorId); 
routerusuario.put('/usuario/:id',permission([1,2,3,5]), usuarioControllers.actualizarUsuario);
routerusuario.delete('/usuario/:id',permission([1,2,3,5]), usuarioControllers.eliminarUsuario);

module.exports = routerusuario;
