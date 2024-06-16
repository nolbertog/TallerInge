const express = require('express');
const recursosComprometidosControllers = require('../controllers/recursosComprometidosControllers'); 
const permission = require('../midleware/verificarPermisos');

const routerRecursosComprometidos = express.Router();

routerRecursosComprometidos.use(express.json());

routerRecursosComprometidos.post('/recursosComprometidos',permission([1,2,3,4,6]), recursosComprometidosControllers.crearRecursosComprometidos);
routerRecursosComprometidos.get('/recursosComprometidos',permission([1,2,3,4,6]), recursosComprometidosControllers.obtenerRecursosComprometidos); 
routerRecursosComprometidos.get('/recursosComprometidos/:id',permission(1,2,3,4,6), recursosComprometidosControllers.obtenerRecursosComprometidosPorId); 
routerRecursosComprometidos.put('/recursosComprometidos/:id',permission([1,2,3,4,6]), recursosComprometidosControllers.actualizarRecursosComprometidos);
routerRecursosComprometidos.delete('/recursosComprometidos/:id',permission([1,2,3]), recursosComprometidosControllers.eliminarRecursosComprometidos);

module.exports = routerRecursosComprometidos;
