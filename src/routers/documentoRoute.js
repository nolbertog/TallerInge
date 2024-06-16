const express = require('express');
const routerDocumento = express.Router();
const documentoControllers = require('../controllers/documentoControllers'); 
const permission = require('../midleware/verificarPermisos');

routerDocumento.use(express.json());

routerDocumento.post('/documento',permission([1,2,3]), documentoControllers.crearDocumento);
routerDocumento.get('/documento',permission([1,2,3,4,5,6,7]), documentoControllers.obtenerDocumento); 
routerDocumento.get('/documento/:id',permission([1,2,3,4,5,6,7]), documentoControllers.obtenerDocumentoPorId); 
routerDocumento.put('/documento/:id',permission([1,2,3,5,7]), documentoControllers.actualizarDocumento);
routerDocumento.delete('/documento/:id',permission([1,2,3]), documentoControllers.eliminarDocumento);

module.exports = routerDocumento;
