const express = require('express');
const routerRegion = express.Router();
const regionControllers = require('../controllers/regionControllers'); 

routerRegion.use(express.json());

routerRegion.post('/region', regionControllers.crearRegion);
routerRegion.get('/region', regionControllers.obtenerRegion); 
routerRegion.get('/region/:id', regionControllers.obtenerRegionPorId); 
routerRegion.put('/region/:id', regionControllers.actualizarRegion);
routerRegion.delete('/region/:id', regionControllers.eliminarRegion);

module.exports = routerRegion;
