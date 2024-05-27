const express = require('express');
const routerDivulgacion = express.Router();
const divulgacionControllers = require('../controllers/divulgacionControllers'); 

routerDivulgacion.use(express.json());

routerDivulgacion.post('/divulgacion', divulgacionControllers.crearDivulgacion);
routerDivulgacion.get('/divulgacion', divulgacionControllers.obtenerDivulgacion); 
routerDivulgacion.get('/divulgacion/:id', divulgacionControllers.obtenerDivulgacionPorId); 
routerDivulgacion.put('/divulgacion/:id', divulgacionControllers.actualizarDivulgacion);
routerDivulgacion.delete('/divulgacion/:id', divulgacionControllers.eliminarDivulgacion);

module.exports = routerDivulgacion;
