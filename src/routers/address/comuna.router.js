const express = require('express');
const routerComuna = express.Router();
const comunaControllers = require('../../controllers/address/comuna.controller');
const permission = require('../../middleware/verificarPermisos');

routerComuna.use(express.json());

routerComuna.post('/comuna',permission([1]), comunaControllers.crearComuna);
routerComuna.get('/comuna',permission([1,2,3,4,5,6,7]), comunaControllers.obtenerComuna); 
routerComuna.get('/comuna/:id',permission([1,2,3,4,5,6,7]), comunaControllers.obtenerComunaPorId); 
routerComuna.put('/comuna/:id',permission([1]), comunaControllers.actualizarComuna);
routerComuna.delete('/comuna/:id',permission([1]), comunaControllers.eliminarComuna);

module.exports = routerComuna;
