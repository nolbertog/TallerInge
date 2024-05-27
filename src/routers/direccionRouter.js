const express = require('express');
const routerDireccion = express.Router();
const direccionControllers = require('../controllers/direccionControllers'); 

routerDireccion.use(express.json());

routerDireccion.post('/direccion', direccionControllers.crearDireccion);
routerDireccion.get('/direccion', direccionControllers.obtenerDireccion); 
routerDireccion.get('/direccion/:id', direccionControllers.obtenerDireccionPorId); 
routerDireccion.put('/direccion/:id', direccionControllers.actualizarDireccion);
routerDireccion.delete('/direccion/:id', direccionControllers.eliminarDireccion);

module.exports = routerDireccion;
