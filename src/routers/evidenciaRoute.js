const express = require('express');
const routerEvidencia = express.Router();
const evidenciaControllers = require('../controllers/evidenciaControllers'); 

routerEvidencia.use(express.json());

routerEvidencia.post('/evidencia', evidenciaControllers.crearEvidencia);
routerEvidencia.get('/evidencia', evidenciaControllers.obtenerEvidencia); 
routerEvidencia.get('/evidencia/:id', evidenciaControllers.obtenerEvidenciaPorId); 
routerEvidencia.put('/evidencia/:id', evidenciaControllers.actualizarEvidencia);
routerEvidencia.delete('/evidencia/:id', evidenciaControllers.eliminarEvidencia);

module.exports = routerEvidencia;
