const express = require('express');
const routerFacultad = express.Router();
const facultadControllers = require('../../controllers/ucm/facultad.controller');
const permission = require('../../middleware/verificarPermisos');

routerFacultad.use(express.json());

routerFacultad.post('/facultad',permission([1,2]), facultadControllers.crearFacultad);
routerFacultad.get('/facultad',permission([1,2,3,4,5]), facultadControllers.obtenerFacultad); 
routerFacultad.get('/facultad/:id',permission([1,2,3,4,5]), facultadControllers.obtenerFacultadPorId); 
routerFacultad.put('/facultad/:id',permission([1,2,3]), facultadControllers.actualizarFacultad);
routerFacultad.delete('/facultad/:id',permission([1,2,3]), facultadControllers.eliminarFacultad);

module.exports = routerFacultad;
