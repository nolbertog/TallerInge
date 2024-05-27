const express = require('express');
const routerAprobaciones = express.Router();
const aprobacionesControllers = require('../controllers/aprobacionesControllers'); 

routerAprobaciones.use(express.json());

routerAprobaciones.post('/aprobaciones', aprobacionesControllers.crearAprobaciones);
routerAprobaciones.get('/aprobaciones', aprobacionesControllers.obtenerAprobaciones); 
routerAprobaciones.get('/aprobaciones/:id', aprobacionesControllers.obtenerAprobacionesPorId); 
routerAprobaciones.put('/aprobaciones/:id', aprobacionesControllers.actualizarAprobaciones);
routerAprobaciones.delete('/aprobaciones/:id', aprobacionesControllers.eliminarAprobaciones);

module.exports = routerAprobaciones;
