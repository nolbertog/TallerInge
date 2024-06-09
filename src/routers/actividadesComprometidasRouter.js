const express = require('express');
const actividadesComprometidasControllers = require('../controllers/actividadesContrometidasControllers'); 
const routerActividadesComprometidas = express.Router();
const permission = require('../midleware/verificarPermisos');
routerActividadesComprometidas.use(express.json());

routerActividadesComprometidas.post('/actividadesComprometidas',permission([1]), actividadesComprometidasControllers.crearActividadesComprometidas);
routerActividadesComprometidas.get('/actividadesComprometidas',permission([1]), actividadesComprometidasControllers.obtenerActividadesComprometidas); 
routerActividadesComprometidas.get('/actividadesComprometidas/:id',permission([1]), actividadesComprometidasControllers.obtenerActividadesComprometidasPorId); 
routerActividadesComprometidas.put('/actividadesComprometidas/:id',permission([1]), actividadesComprometidasControllers.actualizarActividadesComprometidas);
routerActividadesComprometidas.delete('/actividadesComprometidas/:id',permission([1]), actividadesComprometidasControllers.eliminarActividadesComprometidas);

module.exports = routerActividadesComprometidas;
