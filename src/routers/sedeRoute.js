const express = require('express');
const routersede = express.Router();
const sedeControllers = require('../controllers/sedeControllers'); 
const permission = require('../midleware/verificarPermisos');

routersede.use(express.json());

routersede.post('/sede',permission([1,2,3]), sedeControllers.crearSede);
routersede.get('/sede',permission([1,2,3,4,5]), sedeControllers.obtenerSede); 
routersede.get('/sede/:id',permission([1,2,3,4,5]), sedeControllers.obtenerSedePorId); 
routersede.put('/sede/:id',permission([1,2,3]), sedeControllers.actualizarSede);
routersede.delete('/sede/:id',permission([1,2,3]), sedeControllers.eliminarSede);

module.exports = routersede;
