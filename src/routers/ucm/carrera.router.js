const express = require('express');
const routerCarrera = express.Router();
const carreraControllers = require('../../controllers/ucm/carrera.controller');
const permission = require('../../middleware/verificarPermisos');

routerCarrera.use(express.json());

routerCarrera.post('/carrera',permission([1,2,3]), carreraControllers.crearCarrera);
routerCarrera.get('/carrera',permission([1,2,3,4,5,6]), carreraControllers.obtenerCarrera); 
routerCarrera.get('/carrera/:id',permission([1,2,3,4,5,6]), carreraControllers.obtenerCarreraPorId); 
routerCarrera.put('/carrera/:id',permission([1,2,3]), carreraControllers.actualizarCarrera);
routerCarrera.delete('/carrera/:id',permission([1,2,3]), carreraControllers.eliminarCarrera);

module.exports = routerCarrera;
