const express = require('express');
const entidadPostulanteControllers = require('../controllers/entidadPostulanteControllers'); 

const routerEntidadPostulante = express.Router();

routerEntidadPostulante.use(express.json());

routerEntidadPostulante.post('/entidadPostulante', entidadPostulanteControllers.crearEntidadPostulante);
routerEntidadPostulante.get('/entidadPostulante', entidadPostulanteControllers.obtenerEntidadPostulante); 
routerEntidadPostulante.get('/entidadPostulante/:id', entidadPostulanteControllers.obtenerEntidadPostulantePorId); 
routerEntidadPostulante.put('/entidadPostulante/:id', entidadPostulanteControllers.actualizarEntidadPostulante);
routerEntidadPostulante.delete('/entidadPostulante/:id', entidadPostulanteControllers.eliminarEntidadPostulante);

module.exports = routerEntidadPostulante;
