const express = require('express');
const restriccionAprobacionControllers = require('../controllers/restriccionAprobacionControllers'); 

const routerRestriccionAprobacion = express.Router();

routerRestriccionAprobacion.use(express.json());

routerRestriccionAprobacion.post('/restriccionAprobacion', restriccionAprobacionControllers.crearRestriccionAprobacion);
routerRestriccionAprobacion.get('/restriccionAprobacion', restriccionAprobacionControllers.obtenerRestriccionAprobacion); 
routerRestriccionAprobacion.get('/restriccionAprobacion/:id', restriccionAprobacionControllers.obtenerRestriccionAprobacionPorId); 
routerRestriccionAprobacion.put('/restriccionAprobacion/:id', restriccionAprobacionControllers.actualizarRestriccionAprobacion);
routerRestriccionAprobacion.delete('/restriccionAprobacion/:id', restriccionAprobacionControllers.eliminarRestriccionAprobacion);

module.exports = routerRestriccionAprobacion;
