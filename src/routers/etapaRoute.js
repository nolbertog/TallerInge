const express = require('express');
const routerEtapa = express.Router();
const etapaControllers = require('../controllers/etapaControllers'); 

routerEtapa.use(express.json());

routerEtapa.post('/etapa', etapaControllers.crearEtapa);
routerEtapa.get('/etapa', etapaControllers.obtenerEtapa); 
routerEtapa.get('/etapa/:id', etapaControllers.obtenerEtapaPorId); 
routerEtapa.put('/etapa/:id', etapaControllers.actualizarEtapa);
routerEtapa.delete('/etapa/:id', etapaControllers.eliminarEtapa);

module.exports = routerEtapa;
