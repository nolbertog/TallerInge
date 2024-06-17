const express = require('express');
const routerAlineamiento = express.Router();
const alineamientoControllers = require('../../controllers/proyect/alineamiento.controller');
const permission = require('../../middleware/verificarPermisos');

routerAlineamiento.use(express.json());

routerAlineamiento.post('/alineamiento',permission([1,2,3]), alineamientoControllers.crearAlineamiento);
routerAlineamiento.get('/alineamiento',permission([1,2,3]), alineamientoControllers.obtenerAlineamiento); 
routerAlineamiento.get('/alineamiento/:id',permission([1,2,3]), alineamientoControllers.obtenerAlineamientoPorId); 
routerAlineamiento.put('/alineamiento/:id',permission([1,2,3]), alineamientoControllers.actualizarAlineamiento);
routerAlineamiento.delete('/alineamiento/:id',permission([1]), alineamientoControllers.eliminarAlineamiento);

module.exports = routerAlineamiento;
