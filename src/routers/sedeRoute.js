const express = require('express');
const routersede = express.Router();
const sedeControllers = require('../controllers/sedeControllers'); 

routersede.use(express.json());

routersede.post('/sede', sedeControllers.crearSede);
routersede.get('/sede', sedeControllers.obtenerSede); 
routersede.get('/sede/:id', sedeControllers.obtenerSedePorId); 
routersede.put('/sede/:id', sedeControllers.actualizarSede);
routersede.delete('/sede/:id', sedeControllers.eliminarSede);

module.exports = routersede;
