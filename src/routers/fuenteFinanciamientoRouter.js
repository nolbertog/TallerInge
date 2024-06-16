const express = require('express');
const fuenteFinanciamientoControllers = require('../controllers/fuenteFinanciamientoControllers'); 
const permission = require('../midleware/verificarPermisos');

const routerFuenteFinanciamiento = express.Router();

routerFuenteFinanciamiento.use(express.json());

routerFuenteFinanciamiento.post('/fuenteFinanciamiento',permission([1,2,3]), fuenteFinanciamientoControllers.crearFuenteFinanciamiento);
routerFuenteFinanciamiento.get('/fuenteFinanciamiento',permission([1,2,3,4,6]), fuenteFinanciamientoControllers.obtenerFuenteFinanciamiento); 
routerFuenteFinanciamiento.get('/fuenteFinanciamiento/:id',permission([1,2,3,4,6]), fuenteFinanciamientoControllers.obtenerFuenteFinanciamientoPorId); 
routerFuenteFinanciamiento.put('/fuenteFinanciamiento/:id',permission([1,2,3,4,6]), fuenteFinanciamientoControllers.actualizarFuenteFinanciamiento);
routerFuenteFinanciamiento.delete('/fuenteFinanciamiento/:id',permission([1]), fuenteFinanciamientoControllers.eliminarFuenteFinanciamiento);

module.exports = routerFuenteFinanciamiento;
