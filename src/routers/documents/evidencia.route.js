const express = require('express');
const routerEvidencia = express.Router();
const evidenciaControllers = require('../../controllers/documents/evidencia.Controller');
const permission = require('../../middleware/verificarPermisos');

routerEvidencia.use(express.json());

routerEvidencia.post('/evidencia',permission([1,2,3,5]), evidenciaControllers.crearEvidencia);
routerEvidencia.get('/evidencia',permission([1,2,3,4,5,6,7]), evidenciaControllers.obtenerEvidencia); 
routerEvidencia.get('/evidencia/:id',permission(1,2,3,4,5,6,7), evidenciaControllers.obtenerEvidenciaPorId); 
routerEvidencia.put('/evidencia/:id',permission([1,2,3,5]), evidenciaControllers.actualizarEvidencia);
routerEvidencia.delete('/evidencia/:id',permission([1,2,3]), evidenciaControllers.eliminarEvidencia);

module.exports = routerEvidencia;
