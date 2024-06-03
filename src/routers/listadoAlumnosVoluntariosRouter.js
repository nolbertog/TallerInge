const express = require('express');
const listadoAlumnosVoluntariosControllers = require('../controllers/listadoAlumnosVoluntariosControllers'); 

const routerListadoAlumnosVoluntarios = express.Router();

routerListadoAlumnosVoluntarios.use(express.json());

routerListadoAlumnosVoluntarios.post('/listadoAlumnosVoluntarios', listadoAlumnosVoluntariosControllers.crearListadoAlumnosVoluntarios);
routerListadoAlumnosVoluntarios.get('/listadoAlumnosVoluntarios', listadoAlumnosVoluntariosControllers.obtenerListadoAlumnosVoluntarios); 
routerListadoAlumnosVoluntarios.get('/listadoAlumnosVoluntarios/:id', listadoAlumnosVoluntariosControllers.obtenerListadoAlumnosVoluntariosPorId); 
routerListadoAlumnosVoluntarios.put('/listadoAlumnosVoluntarios/:id', listadoAlumnosVoluntariosControllers.actualizarListadoAlumnosVoluntarios);
routerListadoAlumnosVoluntarios.delete('/listadoAlumnosVoluntarios/:id', listadoAlumnosVoluntariosControllers.eliminarListadoAlumnosVoluntarios);

module.exports = routerListadoAlumnosVoluntarios;
