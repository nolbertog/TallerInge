const express = require('express');
const routerAmbito = express.Router();
const ambitoControllers = require('../controllers/ambitoControllers'); 

routerAmbito.use(express.json());

routerAmbito.post('/ambito', ambitoControllers.crearAmbito);
routerAmbito.get('/ambito', ambitoControllers.obtenerAmbito); 
routerAmbito.get('/ambito/:id', ambitoControllers.obtenerAmbitoPorId); 
routerAmbito.put('/ambito/:id', ambitoControllers.actualizarAmbito);
routerAmbito.delete('/ambito/:id', ambitoControllers.eliminarAmbito);

module.exports = routerAmbito;
