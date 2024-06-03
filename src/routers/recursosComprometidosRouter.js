const express = require('express');
const recursosComprometidosControllers = require('../controllers/recursosComprometidosControllers'); 

const routerRecursosComprometidos = express.Router();

routerRecursosComprometidos.use(express.json());

routerRecursosComprometidos.post('/recursosComprometidos', recursosComprometidosControllers.crearRecursosComprometidos);
routerRecursosComprometidos.get('/recursosComprometidos', recursosComprometidosControllers.obtenerRecursosComprometidos); 
routerRecursosComprometidos.get('/recursosComprometidos/:id', recursosComprometidosControllers.obtenerRecursosComprometidosPorId); 
routerRecursosComprometidos.put('/recursosComprometidos/:id', recursosComprometidosControllers.actualizarRecursosComprometidos);
routerRecursosComprometidos.delete('/recursosComprometidos/:id', recursosComprometidosControllers.eliminarRecursosComprometidos);

module.exports = routerRecursosComprometidos;
