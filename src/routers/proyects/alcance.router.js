const express = require('express');
const routerAlcance = express.Router();
const alcanceControllers = require('../../controllers/proyect/alcance.controller');
const permission = require('../../middleware/verificarPermisos');


routerAlcance.use(express.json());

routerAlcance.post('/alcance',permission([1,2,3]), alcanceControllers.crearAlcance);
routerAlcance.get('/alcance',permission([1,2,3,4,5,6,7]), alcanceControllers.obtenerAlcance); 
routerAlcance.get('/alcance/:id',permission([1,2,3,4,5,6,7]), alcanceControllers.obtenerAlcancePorId); 
routerAlcance.put('/alcance/:id',permission([1,2,3]), alcanceControllers.actualizarAlcance);
routerAlcance.delete('/alcance/:id',permission([1,2,3]), alcanceControllers.eliminarAlcance);

module.exports = routerAlcance;
