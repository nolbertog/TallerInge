const express = require('express');
const routerRiesgo = express.Router();
const riesgoControllers = require('../controllers/riesgoControllers'); 
const permission = require('../midleware/verificarPermisos');

routerRiesgo.use(express.json());

routerRiesgo.post('/riesgo',permission([1,2,3,5]), riesgoControllers.crearRiesgo);
routerRiesgo.get('/riesgo',permission([1,2,3,4,5,6]), riesgoControllers.obtenerRiesgo); 
routerRiesgo.get('/riesgo/:id',permission([1,2,3,4,5]), riesgoControllers.obtenerRiesgoPorId); 
routerRiesgo.put('/riesgo/:id',permission([1,2,3,5]), riesgoControllers.actualizarRiesgo);
routerRiesgo.delete('/riesgo/:id',permission([1,2,3]), riesgoControllers.eliminarRiesgo);

module.exports = routerRiesgo;
