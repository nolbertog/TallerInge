const express = require('express');
const routerRiesgo = express.Router();
const riesgoControllers = require('../controllers/riesgoControllers'); 

routerRiesgo.use(express.json());

routerRiesgo.post('/riesgo', riesgoControllers.crearRiesgo);
routerRiesgo.get('/riesgo', riesgoControllers.obtenerRiesgo); 
routerRiesgo.get('/riesgo/:id', riesgoControllers.obtenerRiesgoPorId); 
routerRiesgo.put('/riesgo/:id', riesgoControllers.actualizarRiesgo);
routerRiesgo.delete('/riesgo/:id', riesgoControllers.eliminarRiesgo);

module.exports = routerRiesgo;
