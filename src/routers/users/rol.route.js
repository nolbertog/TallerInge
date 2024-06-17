const express = require('express');
const routerRol = express.Router();
const rolControllers = require('../../controllers/users/rol.controller');
const permission = require('../../middleware/verificarPermisos');

routerRol.use(express.json());

routerRol.post('/rol',permission([1]), rolControllers.crearRol);
routerRol.get('/rol',permission([1,2]), rolControllers.obtenerRol); 
routerRol.get('/rol/:id',permission([1,2]), rolControllers.obtenerRolPorId); 
routerRol.put('/rol/:id',permission([1,2]), rolControllers.actualizarRol);
routerRol.delete('/rol/:id',permission([1]), rolControllers.eliminarRol);

module.exports = routerRol;
