const express = require('express');
const entidadPostulanteControllers = require('../../controllers/users/entidadPostulante.controller');
const permission = require('../../middleware/verificarPermisos');

const routerEntidadPostulante = express.Router();

routerEntidadPostulante.use(express.json());

routerEntidadPostulante.post('/entidadPostulante',permission([1,2,3,5,7]), entidadPostulanteControllers.crearEntidadPostulante);
routerEntidadPostulante.get('/entidadPostulante',permission([1,2,3,5,7]), entidadPostulanteControllers.obtenerEntidadPostulante); 
routerEntidadPostulante.get('/entidadPostulante/:id',permission([1,2,3,5,7]), entidadPostulanteControllers.obtenerEntidadPostulantePorId); 
routerEntidadPostulante.put('/entidadPostulante/:id',permission([1,2,3]), entidadPostulanteControllers.actualizarEntidadPostulante);
routerEntidadPostulante.delete('/entidadPostulante/:id',permission([1,2,3]), entidadPostulanteControllers.eliminarEntidadPostulante);

module.exports = routerEntidadPostulante;
