const express = require('express');
const routerCiudad = express.Router();
const ciudadControllers = require('../controllers/ciudadControllers'); 

routerCiudad.use(express.json());

routerCiudad.post('/ciudad', ciudadControllers.crearCiudad);
routerCiudad.get('/ciudad', ciudadControllers.obtenerCiudad); 
routerCiudad.get('/ciudad/:id', ciudadControllers.obtenerCiudadPorId); 
routerCiudad.put('/ciudad/:id', ciudadControllers.actualizarCiudad);
routerCiudad.delete('/ciudad/:id', ciudadControllers.eliminarCiudad);

module.exports = routerCiudad;
