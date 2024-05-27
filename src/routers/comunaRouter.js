const express = require('express');
const routerComuna = express.Router();
const comunaControllers = require('../controllers/comunaControllers'); 

routerComuna.use(express.json());

routerComuna.post('/comuna', comunaControllers.crearComuna);
routerComuna.get('/comuna', comunaControllers.obtenerComuna); 
routerComuna.get('/comuna/:id', comunaControllers.obtenerComunaPorId); 
routerComuna.put('/comuna/:id', comunaControllers.actualizarComuna);
routerComuna.delete('/comuna/:id', comunaControllers.eliminarComuna);

module.exports = routerComuna;
