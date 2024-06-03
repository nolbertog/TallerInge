const express = require('express');
const albunFotoControllers = require('../controllers/albunFotoControllers'); 

const routerAlbunFoto = express.Router();

routerAlbunFoto.use(express.json());

routerAlbunFoto.post('/albunFoto', albunFotoControllers.crearAlbunFoto);
routerAlbunFoto.get('/albunFoto', albunFotoControllers.obtenerAlbunFoto); 
routerAlbunFoto.get('/albunFoto/:id', albunFotoControllers.obtenerAlbunFotoPorId); 
routerAlbunFoto.put('/albunFoto/:id', albunFotoControllers.actualizarAlbunFoto);
routerAlbunFoto.delete('/albunFoto/:id', albunFotoControllers.eliminarAlbunFoto);

module.exports = routerAlbunFoto;
