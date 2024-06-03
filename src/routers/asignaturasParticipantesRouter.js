const express = require('express');
const asignaturasParticipantesControllers = require('../controllers/asignaturasParticipantesControllers'); 

const routerAsignaturasParticipantes = express.Router();

routerAsignaturasParticipantes.use(express.json());

routerAsignaturasParticipantes.post('/asignaturasParticipantes', asignaturasParticipantesControllers.crearAsignaturasParticipantes);
routerAsignaturasParticipantes.get('/asignaturasParticipantes', asignaturasParticipantesControllers.obtenerAsignaturasParticipantes); 
routerAsignaturasParticipantes.get('/asignaturasParticipantes/:id', asignaturasParticipantesControllers.obtenerAsignaturasParticipantesPorId); 
routerAsignaturasParticipantes.put('/asignaturasParticipantes/:id', asignaturasParticipantesControllers.actualizarAsignaturasParticipantes);
routerAsignaturasParticipantes.delete('/asignaturasParticipantes/:id', asignaturasParticipantesControllers.eliminarAsignaturasParticipantes);

module.exports = routerAsignaturasParticipantes;
