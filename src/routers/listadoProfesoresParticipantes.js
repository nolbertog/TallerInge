const express = require('express');
const listadoProfesoresParticipantesControllers = require('../controllers/listadoProfesoresParticipantesControllers'); 
const permission = require('../midleware/verificarPermisos');

const routerListadoProfesoresParticipantes = express.Router();

routerListadoProfesoresParticipantes.use(express.json());

routerListadoProfesoresParticipantes.post('/listadoProfesoresParticipantes',permission([1,2,3]), listadoProfesoresParticipantesControllers.crearListadoProfesoresParticipantes);
routerListadoProfesoresParticipantes.get('/listadoProfesoresParticipantes',permission([1,2,3,5]), listadoProfesoresParticipantesControllers.obtenerListadoProfesoresParticipantes); 
routerListadoProfesoresParticipantes.get('/listadoProfesoresParticipantes/:id',permission([1,2,3,5]), listadoProfesoresParticipantesControllers.obtenerListadoProfesoresParticipantesPorId); 
routerListadoProfesoresParticipantes.put('/listadoProfesoresParticipantes/:id',permission([1,2,3]), listadoProfesoresParticipantesControllers.actualizarListadoProfesoresParticipantes);
routerListadoProfesoresParticipantes.delete('/listadoProfesoresParticipantes/:id',permission([1,2,3]), listadoProfesoresParticipantesControllers.eliminarListadoProfesoresParticipantes);

module.exports = routerListadoProfesoresParticipantes;
