const express = require('express');
const restriccionAprobacionControllers = require('../../controllers/proyect/restriccionAprobacion.controller');
const permission = require('../../middleware/verificarPermisos');

const routerRestriccionAprobacion = express.Router();

routerRestriccionAprobacion.use(express.json());

routerRestriccionAprobacion.post('/restriccionAprobacion',permission([1,2,3]), restriccionAprobacionControllers.crearRestriccionAprobacion);
routerRestriccionAprobacion.get('/restriccionAprobacion',permission([1,2,3]), restriccionAprobacionControllers.obtenerRestriccionAprobacion); 
routerRestriccionAprobacion.get('/restriccionAprobacion/:id',permission([1,2,3]), restriccionAprobacionControllers.obtenerRestriccionAprobacionPorId); 
routerRestriccionAprobacion.put('/restriccionAprobacion/:id',permission([1,2,3]), restriccionAprobacionControllers.actualizarRestriccionAprobacion);
routerRestriccionAprobacion.delete('/restriccionAprobacion/:id',permission([1,2,3]), restriccionAprobacionControllers.eliminarRestriccionAprobacion);

module.exports = routerRestriccionAprobacion;
