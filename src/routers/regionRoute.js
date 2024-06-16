const express = require('express');
const routerRegion = express.Router();
const regionControllers = require('../controllers/regionControllers'); 
const permission = require('../midleware/verificarPermisos');

routerRegion.use(express.json());

routerRegion.post('/region',permission([1]), regionControllers.crearRegion);
routerRegion.get('/region',permission([1,2,3,4,5,6,7]), regionControllers.obtenerRegion); 
routerRegion.get('/region/:id',permission([1,2,3,4,5,6,7]), regionControllers.obtenerRegionPorId); 
routerRegion.put('/region/:id',permission([1]), regionControllers.actualizarRegion);
routerRegion.delete('/region/:id',permission([1]), regionControllers.eliminarRegion);

module.exports = routerRegion;
