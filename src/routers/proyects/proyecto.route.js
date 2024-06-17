const express = require('express');
const routerProyecto = express.Router();
const proyectoControllers = require('../../controllers/proyect/proyecto.controller');
const permission = require('../../middleware/verificarPermisos');

routerProyecto.use(express.json());

routerProyecto.post('/proyecto',permission([1,2,3,7]), proyectoControllers.crearProyecto);
routerProyecto.get('/proyecto',permission([1,2,3,4,5,6,7]), proyectoControllers.obtenerProyecto); 
routerProyecto.get('/proyecto/:id',permission([1,2,3,4,5,6,7]), proyectoControllers.obtenerProyectoPorId); 
routerProyecto.put('/proyecto/:id',permission([1,2,3,4,5,6,7]), proyectoControllers.actualizarProyecto);
routerProyecto.delete('/proyecto/:id',permission([1,7]), proyectoControllers.eliminarProyecto);

module.exports = routerProyecto;
