const express = require('express');
const fuenteFinanciamientoControllers = require('../controllers/fuenteFinanciamientoControllers'); 

const routerFuenteFinanciamiento = express.Router();

routerFuenteFinanciamiento.use(express.json());

routerFuenteFinanciamiento.post('/fuenteFinanciamiento', fuenteFinanciamientoControllers.crearFuenteFinanciamiento);
routerFuenteFinanciamiento.get('/fuenteFinanciamiento', fuenteFinanciamientoControllers.obtenerFuenteFinanciamiento); 
routerFuenteFinanciamiento.get('/fuenteFinanciamiento/:id', fuenteFinanciamientoControllers.obtenerFuenteFinanciamientoPorId); 
routerFuenteFinanciamiento.put('/fuenteFinanciamiento/:id', fuenteFinanciamientoControllers.actualizarFuenteFinanciamiento);
routerFuenteFinanciamiento.delete('/fuenteFinanciamiento/:id', fuenteFinanciamientoControllers.eliminarFuenteFinanciamiento);

module.exports = routerFuenteFinanciamiento;
