const express = require('express');
const routerEtapa = express.Router();
const etapaControllers = require('../../controllers/proyect/etapa.controller');
const permission = require('../../middleware/verificarPermisos');

routerEtapa.use(express.json());

routerEtapa.post('/etapa',permission([1,2,3,4,5,6]), etapaControllers.crearEtapa);
routerEtapa.get('/etapa',permission([1,2,3,4,5,6,7]), etapaControllers.obtenerEtapa); 
routerEtapa.get('/etapa/:id',permission([1,2,3,4,5,6,7]), etapaControllers.obtenerEtapaPorId); 
routerEtapa.put('/etapa/:id',permission([1,2,3,5]), etapaControllers.actualizarEtapa);
routerEtapa.delete('/etapa/:id',permission([1,2,3]), etapaControllers.eliminarEtapa);

module.exports = routerEtapa;
