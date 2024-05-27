const express = require('express');
const routerDificultad = express.Router();
const dificultadControllers = require('../controllers/dificultadControllers'); 

routerDificultad.use(express.json());

routerDificultad.post('/dificultad', dificultadControllers.crearDificultad);
routerDificultad.get('/dificultad', dificultadControllers.obtenerDificultad); 
routerDificultad.get('/dificultad/:id', dificultadControllers.obtenerDificultadPorId); 
routerDificultad.put('/dificultad/:id', dificultadControllers.actualizarDificultad);
routerDificultad.delete('/dificultad/:id', dificultadControllers.eliminarDificultad);

module.exports = routerDificultad;
