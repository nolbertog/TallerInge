const express = require('express');
const asignaturasParticipantesControllers = require('../controllers/asignaturasParticipantesControllers'); 
const permission = require('../midleware/verificarPermisos');

const routerAsignaturasParticipantes = express.Router();

routerAsignaturasParticipantes.use(express.json());

routerAsignaturasParticipantes.post('/asignaturasParticipantes',permission([1,2,3,6]), asignaturasParticipantesControllers.crearAsignaturasParticipantes);
routerAsignaturasParticipantes.get('/asignaturasParticipantes',permission([1,2,3,4,5,6]), asignaturasParticipantesControllers.obtenerAsignaturasParticipantes); 
routerAsignaturasParticipantes.get('/asignaturasParticipantes/:id',permission([1,2,3,4,5,6]), asignaturasParticipantesControllers.obtenerAsignaturasParticipantesPorId); 
routerAsignaturasParticipantes.put('/asignaturasParticipantes/:id',permission([1,2,3,6]), asignaturasParticipantesControllers.actualizarAsignaturasParticipantes);
routerAsignaturasParticipantes.delete('/asignaturasParticipantes/:id',permission([1,2,3]), asignaturasParticipantesControllers.eliminarAsignaturasParticipantes);

module.exports = routerAsignaturasParticipantes;
