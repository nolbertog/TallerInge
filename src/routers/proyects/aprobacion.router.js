const express = require('express');
const routerAprobaciones = express.Router();
const aprobacionesControllers = require('../../controllers/proyect/aprobacion.controller');
const permission = require('../../middleware/verificarPermisos');

routerAprobaciones.use(express.json());

routerAprobaciones.post('/aprobaciones',permission([1,2,3]), aprobacionesControllers.crearAprobaciones);
routerAprobaciones.get('/aprobaciones',permission([1,2,3,5,7]), aprobacionesControllers.obtenerAprobaciones); 
routerAprobaciones.get('/aprobaciones/:id',permission([1,2,3,5,7]), aprobacionesControllers.obtenerAprobacionesPorId); 
routerAprobaciones.put('/aprobaciones/:id',permission([1,2,3]), aprobacionesControllers.actualizarAprobaciones);
routerAprobaciones.delete('/aprobaciones/:id',permission([1]), aprobacionesControllers.eliminarAprobaciones);

module.exports = routerAprobaciones;
