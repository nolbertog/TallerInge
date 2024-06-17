const express = require('express');
const routerCiudad = express.Router();
const ciudadControllers = require('../../controllers/address/ciudad.controller');
const permission = require('../../middleware/verificarPermisos');

routerCiudad.use(express.json());

routerCiudad.post('/ciudad',permission([1]), ciudadControllers.crearCiudad);
routerCiudad.get('/ciudad',permission([1,2,3,4,5,6,7]), ciudadControllers.obtenerCiudad); 
routerCiudad.get('/ciudad/:id',permission([1,2,3,4,5,6,7]), ciudadControllers.obtenerCiudadPorId); 
routerCiudad.put('/ciudad/:id',permission([1]), ciudadControllers.actualizarCiudad);
routerCiudad.delete('/ciudad/:id',permission([1]), ciudadControllers.eliminarCiudad);

module.exports = routerCiudad;
