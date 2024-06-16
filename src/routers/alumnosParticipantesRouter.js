const express = require('express');
const alumnosParticipantesControllers = require('../controllers/alumnosParticipantesControllers'); 
const permission = require('../midleware/verificarPermisos');

const routerAlumnosParticipantes = express.Router();

routerAlumnosParticipantes.use(express.json());

routerAlumnosParticipantes.post('/alumnosParticipantes',permission([1,2,3,5]), alumnosParticipantesControllers.crearAlumnosParticipantes);
routerAlumnosParticipantes.get('/alumnosParticipantes',permission([1,2,3,5]), alumnosParticipantesControllers.obtenerAlumnosParticipantes); 
routerAlumnosParticipantes.get('/alumnosParticipantes/:id',permission([1,2,3,5]), alumnosParticipantesControllers.obtenerAlumnosParticipantesPorId); 
routerAlumnosParticipantes.put('/alumnosParticipantes/:id',permission([1,2,3,5]), alumnosParticipantesControllers.actualizarAlumnosParticipantes);
routerAlumnosParticipantes.delete('/alumnosParticipantes/:id',permission([1,2,3,5]), alumnosParticipantesControllers.eliminarAlumnosParticipantes);

module.exports = routerAlumnosParticipantes;
