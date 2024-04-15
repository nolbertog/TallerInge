const express = require('express');
const routerusuario = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers'); 

routerusuario.use(express.json());

routerusuario.post('/usuario', usuarioControllers.crearUsuario);
routerusuario.get('/usuario', usuarioControllers.obtenerUsuarios); 
routerusuario.post('/login', usuarioControllers.iniciarSesion);
routerusuario.get('/usuario/:id', usuarioControllers.obtenerUsuarioPorId); 
routerusuario.put('/usuario/:id', usuarioControllers.actualizarUsuario);
routerusuario.delete('/usuario/:id', usuarioControllers.eliminarUsuario);

module.exports = routerusuario;
