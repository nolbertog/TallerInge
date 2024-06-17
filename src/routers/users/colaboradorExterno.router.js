const express = require('express');
const colaboradorExternoControllers = require('../../controllers/users/colaboradorExterno.controller');
const permission = require('../../middleware/verificarPermisos');

const routerColaboradorExterno = express.Router();

routerColaboradorExterno.use(express.json());

routerColaboradorExterno.post('/colaboradorExterno',permission([1,2,3,5]), colaboradorExternoControllers.crearColaboradorExterno);
routerColaboradorExterno.get('/colaboradorExterno',permission([1,2,3,5]), colaboradorExternoControllers.obtenerColaboradoresExternos); 
routerColaboradorExterno.get('/colaboradorExterno/:id',permission([1,2,3,5]), colaboradorExternoControllers.obtenerColaboradorExternoPorId); 
routerColaboradorExterno.put('/colaboradorExterno/:id',permission([1,2,3,5]), colaboradorExternoControllers.actualizarColaboradorExterno);
routerColaboradorExterno.delete('/colaboradorExterno/:id',permission([1,2]), colaboradorExternoControllers.eliminarColaboradorExterno);

module.exports = routerColaboradorExterno;
