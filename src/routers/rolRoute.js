const express = require('express');
const routerRol = express.Router();
const rolControllers = require('../controllers/rolControllers'); 

routerRol.use(express.json());

routerRol.post('/rol', rolControllers.crearRol);
routerRol.get('/rol', rolControllers.obtenerRol); 
routerRol.get('/rol/:id', rolControllers.obtenerRolPorId); 
routerRol.put('/rol/:id', rolControllers.actualizarRol);
routerRol.delete('/rol/:id', rolControllers.eliminarRol);

module.exports = routerRol;
