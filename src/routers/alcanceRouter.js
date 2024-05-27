const express = require('express');
const routerAlcance = express.Router();
const alcanceControllers = require('../controllers/alcanceControllers'); 

routerAlcance.use(express.json());

routerAlcance.post('/alcance', alcanceControllers.crearAlcance);
routerAlcance.get('/alcance', alcanceControllers.obtenerAlcance); 
routerAlcance.get('/alcance/:id', alcanceControllers.obtenerAlcancePorId); 
routerAlcance.put('/alcance/:id', alcanceControllers.actualizarAlcance);
routerAlcance.delete('/alcance/:id', alcanceControllers.eliminarAlcance);

module.exports = routerAlcance;
