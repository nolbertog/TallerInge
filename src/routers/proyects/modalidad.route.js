const express = require('express');
const routerModalidad = express.Router();
const modalidadControllers = require('../../controllers/proyect/modalidad.controller');
const permission = require('../../middleware/verificarPermisos');

routerModalidad.use(express.json());

routerModalidad.post('/modalidad',permission([1,2,3]), modalidadControllers.crearModalidad);
routerModalidad.get('/modalidad',permission([1,2,3,4,5,6]), modalidadControllers.obtenerModalidad); 
routerModalidad.get('/modalidad/:id',permission([1,2,3,4,5,6]), modalidadControllers.obtenerModalidadPorId); 
routerModalidad.put('/modalidad/:id',permission([1,2,3]), modalidadControllers.actualizarModalidad);
routerModalidad.delete('/modalidad/:id',permission([1]), modalidadControllers.eliminarModalidad);

module.exports = routerModalidad;
