const express = require('express');
const routerDivulgacion = express.Router();
const divulgacionControllers = require('../../controllers/ucm/divulgacion.controller');
const permission = require('../../middleware/verificarPermisos');

routerDivulgacion.use(express.json());

routerDivulgacion.post('/divulgacion',permission([1]), divulgacionControllers.crearDivulgacion);
routerDivulgacion.get('/divulgacion',permission([1,2,3,4,5,6,7]), divulgacionControllers.obtenerDivulgacion); 
routerDivulgacion.get('/divulgacion/:id',permission([1,2,3,4,5,6,7]), divulgacionControllers.obtenerDivulgacionPorId); 
routerDivulgacion.put('/divulgacion/:id',permission([1]), divulgacionControllers.actualizarDivulgacion);
routerDivulgacion.delete('/divulgacion/:id',permission([1]), divulgacionControllers.eliminarDivulgacion);

module.exports = routerDivulgacion;
