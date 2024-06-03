const express = require('express');
const alumnosParticipantesControllers = require('../controllers/alumnosParticipantesControllers'); 

const routerAlumnosParticipantes = express.Router();

routerAlumnosParticipantes.use(express.json());

routerAlumnosParticipantes.post('/alumnosParticipantes', alumnosParticipantesControllers.crearAlumnosParticipantes);
routerAlumnosParticipantes.get('/alumnosParticipantes', alumnosParticipantesControllers.obtenerAlumnosParticipantes); 
routerAlumnosParticipantes.get('/alumnosParticipantes/:id', alumnosParticipantesControllers.obtenerAlumnosParticipantesPorId); 
routerAlumnosParticipantes.put('/alumnosParticipantes/:id', alumnosParticipantesControllers.actualizarAlumnosParticipantes);
routerAlumnosParticipantes.delete('/alumnosParticipantes/:id', alumnosParticipantesControllers.eliminarAlumnosParticipantes);

module.exports = routerAlumnosParticipantes;
