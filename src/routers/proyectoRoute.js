const express = require('express');
const routerProyecto = express.Router();
const proyectoControllers = require('../controllers/proyectoControllers'); 

routerProyecto.use(express.json());

routerProyecto.post('/proyecto', proyectoControllers.crearProyecto);
routerProyecto.get('/proyecto', proyectoControllers.obtenerProyecto); 
routerProyecto.get('/proyecto/:id', proyectoControllers.obtenerProyectoPorId); 
routerProyecto.put('/proyecto/:id', proyectoControllers.actualizarProyecto);
routerProyecto.delete('/proyecto/:id', proyectoControllers.eliminarProyecto);

module.exports = routerProyecto;
