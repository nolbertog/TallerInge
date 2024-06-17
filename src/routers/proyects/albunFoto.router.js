const express = require('express');
const albunFotoControllers = require('../../controllers/proyect/albunFoto.controller');
const permission = require('../../middleware/verificarPermisos');
const routerAlbunFoto = express.Router();

routerAlbunFoto.use(express.json());

routerAlbunFoto.post('/albunFoto',permission([1,2,3,5]), albunFotoControllers.crearAlbunFoto);
routerAlbunFoto.get('/albunFoto',permission([1,2,3,4,5,6,7]), albunFotoControllers.obtenerAlbunFoto); 
routerAlbunFoto.get('/albunFoto/:id',permission([1,2,3,4,5,6,7]), albunFotoControllers.obtenerAlbunFotoPorId); 
routerAlbunFoto.put('/albunFoto/:id',permission([1,2,3,5]), albunFotoControllers.actualizarAlbunFoto);
routerAlbunFoto.delete('/albunFoto/:id',permission([1]), albunFotoControllers.eliminarAlbunFoto);

module.exports = routerAlbunFoto;
