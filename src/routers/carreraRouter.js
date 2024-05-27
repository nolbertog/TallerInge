const express = require('express');
const routerCarrera = express.Router();
const carreraControllers = require('../controllers/carreraControllers'); 

routerCarrera.use(express.json());

routerCarrera.post('/carrera', carreraControllers.crearCarrera);
routerCarrera.get('/carrera', carreraControllers.obtenerCarrera); 
routerCarrera.get('/carrera/:id', carreraControllers.obtenerCarreraPorId); 
routerCarrera.put('/carrera/:id', carreraControllers.actualizarCarrera);
routerCarrera.delete('/carrera/:id', carreraControllers.eliminarCarrera);

module.exports = routerCarrera;
