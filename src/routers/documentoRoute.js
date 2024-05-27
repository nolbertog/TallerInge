const express = require('express');
const routerDocumento = express.Router();
const documentoControllers = require('../controllers/documentoControllers'); 

routerDocumento.use(express.json());

routerDocumento.post('/documento', documentoControllers.crearDocumento);
routerDocumento.get('/documento', documentoControllers.obtenerDocumento); 
routerDocumento.get('/documento/:id', documentoControllers.obtenerDocumentoPorId); 
routerDocumento.put('/documento/:id', documentoControllers.actualizarDocumento);
routerDocumento.delete('/documento/:id', documentoControllers.eliminarDocumento);

module.exports = routerDocumento;
