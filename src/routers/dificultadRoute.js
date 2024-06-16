const express = require('express');
const routerDificultad = express.Router();
const dificultadControllers = require('../controllers/dificultadControllers'); 
const permission = require('../midleware/verificarPermisos');

routerDificultad.use(express.json());

routerDificultad.post('/dificultad',permission([1,2,3,5]), dificultadControllers.crearDificultad);
routerDificultad.get('/dificultad',permission([1,2,3,5]), dificultadControllers.obtenerDificultad); 
routerDificultad.get('/dificultad/:id',permission([1,2,3,5]), dificultadControllers.obtenerDificultadPorId); 
routerDificultad.put('/dificultad/:id',permission([1,2,3,5]), dificultadControllers.actualizarDificultad);
routerDificultad.delete('/dificultad/:id',permission([1,2,3]), dificultadControllers.eliminarDificultad);

module.exports = routerDificultad;
