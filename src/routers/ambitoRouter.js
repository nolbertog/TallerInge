const express = require('express');
const routerAmbito = express.Router();
const ambitoControllers = require('../controllers/ambitoControllers'); 
const permission = require('../midleware/verificarPermisos');

routerAmbito.use(express.json());

routerAmbito.post('/ambito',permission([1,2,3]), ambitoControllers.crearAmbito);
routerAmbito.get('/ambito',permission([1,2,3,4,5,6,7]), ambitoControllers.obtenerAmbito); 
routerAmbito.get('/ambito/:id',permission([1,2,3,4,5,6,7]), ambitoControllers.obtenerAmbitoPorId); 
routerAmbito.put('/ambito/:id',permission([1,2,3]), ambitoControllers.actualizarAmbito);
routerAmbito.delete('/ambito/:id',permission([1]), ambitoControllers.eliminarAmbito);

module.exports = routerAmbito;
