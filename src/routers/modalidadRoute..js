const express = require('express');
const routerModalidad = express.Router();
const modalidadControllers = require('../controllers/modalidadControllers'); 

routerModalidad.use(express.json());

routerModalidad.post('/modalidad', modalidadControllers.crearModalidad);
routerModalidad.get('/modalidad', modalidadControllers.obtenerModalidad); 
routerModalidad.get('/modalidad/:id', modalidadControllers.obtenerModalidadPorId); 
routerModalidad.put('/modalidad/:id', modalidadControllers.actualizarModalidad);
routerModalidad.delete('/modalidad/:id', modalidadControllers.eliminarModalidad);

module.exports = routerModalidad;
