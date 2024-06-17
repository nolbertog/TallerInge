const express = require('express');
const routerArea = express.Router();
const areaControllers = require('../../controllers/proyect/area.controller');
const permission = require('../../middleware/verificarPermisos');

routerArea.use(express.json());

routerArea.post('/area',permission([1,2,3,5]), areaControllers.crearArea);
routerArea.get('/area',permission([1,2,3,5]), areaControllers.obtenerArea); 
routerArea.get('/area/:id',permission([1,2,3,5]), areaControllers.obtenerAreaPorId); 
routerArea.put('/area/:id',permission([1,2,3]), areaControllers.actualizarArea);
routerArea.delete('/area/:id',permission([1]), areaControllers.eliminarArea);

module.exports = routerArea;
