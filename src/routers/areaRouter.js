const express = require('express');
const routerArea = express.Router();
const areaControllers = require('../controllers/areaControllers'); 

routerArea.use(express.json());

routerArea.post('/area', areaControllers.crearArea);
routerArea.get('/area', areaControllers.obtenerArea); 
routerArea.get('/area/:id', areaControllers.obtenerAreaPorId); 
routerArea.put('/area/:id', areaControllers.actualizarArea);
routerArea.delete('/area/:id', areaControllers.eliminarArea);

module.exports = routerArea;
