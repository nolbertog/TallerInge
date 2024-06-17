const express = require('express');
const listadoAlumnosVoluntariosControllers = require('../../controllers/users/alumnoVoluntario.controller');
const permission = require('../../middleware/verificarPermisos');

const routerListadoAlumnosVoluntarios = express.Router();

routerListadoAlumnosVoluntarios.use(express.json());

routerListadoAlumnosVoluntarios.post('/listadoAlumnosVoluntarios',permission([1,2,3,5]), listadoAlumnosVoluntariosControllers.crearListadoAlumnosVoluntarios);
routerListadoAlumnosVoluntarios.get('/listadoAlumnosVoluntarios',permission([1,2,3,5]), listadoAlumnosVoluntariosControllers.obtenerListadoAlumnosVoluntarios); 
routerListadoAlumnosVoluntarios.get('/listadoAlumnosVoluntarios/:id',permission([1,2,3,5]), listadoAlumnosVoluntariosControllers.obtenerListadoAlumnosVoluntariosPorId); 
routerListadoAlumnosVoluntarios.put('/listadoAlumnosVoluntarios/:id',permission([1,2,3,5]), listadoAlumnosVoluntariosControllers.actualizarListadoAlumnosVoluntarios);
routerListadoAlumnosVoluntarios.delete('/listadoAlumnosVoluntarios/:id',permission([1,2,3,5]), listadoAlumnosVoluntariosControllers.eliminarListadoAlumnosVoluntarios);

module.exports = routerListadoAlumnosVoluntarios;
