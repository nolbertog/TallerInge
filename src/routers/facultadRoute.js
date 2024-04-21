const express = require('express');
const routerFacultad = express.Router();
const facultadControllers = require('../controllers/facultadControllers'); 

routerFacultad.use(express.json());

routerFacultad.post('/facultad', facultadControllers.crearFacultad);
routerFacultad.get('/facultad', facultadControllers.obtenerFacultad); 
routerFacultad.get('/facultad/:id', facultadControllers.obtenerFacultadPorId); 
routerFacultad.put('/facultad/:id', facultadControllers.actualizarFacultad);
routerFacultad.delete('/facultad/:id', facultadControllers.eliminarFacultad);

module.exports = routerFacultad;
