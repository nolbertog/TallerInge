const express = require('express');
const colaboradorExternoControllers = require('../controllers/colaboradorExternoControllers'); 

const routerColaboradorExterno = express.Router();

routerColaboradorExterno.use(express.json());

routerColaboradorExterno.post('/colaboradorExterno', colaboradorExternoControllers.crearColaboradorExterno);
routerColaboradorExterno.get('/colaboradorExterno', colaboradorExternoControllers.obtenerColaboradoresExternos); 
routerColaboradorExterno.get('/colaboradorExterno/:id', colaboradorExternoControllers.obtenerColaboradorExternoPorId); 
routerColaboradorExterno.put('/colaboradorExterno/:id', colaboradorExternoControllers.actualizarColaboradorExterno);
routerColaboradorExterno.delete('/colaboradorExterno/:id', colaboradorExternoControllers.eliminarColaboradorExterno);

module.exports = routerColaboradorExterno;
