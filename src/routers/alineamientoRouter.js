const express = require('express');
const routerAlineamiento = express.Router();
const alineamientoControllers = require('../controllers/alineamientoControllers'); 

routerAlineamiento.use(express.json());

routerAlineamiento.post('/alineamiento', alineamientoControllers.crearAlineamiento);
routerAlineamiento.get('/alineamiento', alineamientoControllers.obtenerAlineamiento); 
routerAlineamiento.get('/alineamiento/:id', alineamientoControllers.obtenerAlineamientoPorId); 
routerAlineamiento.put('/alineamiento/:id', alineamientoControllers.actualizarAlineamiento);
routerAlineamiento.delete('/alineamiento/:id', alineamientoControllers.eliminarAlineamiento);

module.exports = routerAlineamiento;
