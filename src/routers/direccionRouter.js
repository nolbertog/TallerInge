const express = require('express');
const routerDireccion = express.Router();
const direccionControllers = require('../controllers/direccionControllers'); 
const permission = require('../midleware/verificarPermisos');

routerDireccion.use(express.json());

routerDireccion.post('/direccion',permission([1,7]), direccionControllers.crearDireccion);
routerDireccion.get('/direccion',permission([1,2,3,4,5,6,7]), direccionControllers.obtenerDireccion); 
routerDireccion.get('/direccion/:id',permission([1,2,3,4,5,6,7]), direccionControllers.obtenerDireccionPorId); 
routerDireccion.put('/direccion/:id',permission([1,7]), direccionControllers.actualizarDireccion);
routerDireccion.delete('/direccion/:id',permission([1]), direccionControllers.eliminarDireccion);

module.exports = routerDireccion;
