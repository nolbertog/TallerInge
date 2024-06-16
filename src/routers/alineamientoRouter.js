const express = require('express');
const routerAlineamiento = express.Router();
const alineamientoControllers = require('../controllers/alineamientoControllers'); 
const permission = require('../midleware/verificarPermisos');

routerAlineamiento.use(express.json());

routerAlineamiento.post('/alineamiento',permission([1,2,3]), alineamientoControllers.crearAlineamiento);
routerAlineamiento.get('/alineamiento',permission([1,2,3]), alineamientoControllers.obtenerAlineamiento); 
routerAlineamiento.get('/alineamiento/:id',permission([1,2,3]), alineamientoControllers.obtenerAlineamientoPorId); 
routerAlineamiento.put('/alineamiento/:id',permission([1,2,3]), alineamientoControllers.actualizarAlineamiento);
routerAlineamiento.delete('/alineamiento/:id',permission([1]), alineamientoControllers.eliminarAlineamiento);

module.exports = routerAlineamiento;
