const express = require('express');
const actividadesComprometidasControllers = require('../controllers/actividadesContrometidasControllers'); 
const routerActividadesComprometidas = express.Router();
const permission = require('../midleware/verificarPermisos');
routerActividadesComprometidas.use(express.json());

routerActividadesComprometidas.post('/actividadesComprometidas',permission([1,2]), actividadesComprometidasControllers.crearActividadesComprometidas);
routerActividadesComprometidas.get('/actividadesComprometidas',permission([1,2]), actividadesComprometidasControllers.obtenerActividadesComprometidas); 
routerActividadesComprometidas.get('/actividadesComprometidas/:id', actividadesComprometidasControllers.obtenerActividadesComprometidasPorId); 
routerActividadesComprometidas.put('/actividadesComprometidas/:id', actividadesComprometidasControllers.actualizarActividadesComprometidas);
routerActividadesComprometidas.delete('/actividadesComprometidas/:id', actividadesComprometidasControllers.eliminarActividadesComprometidas);

module.exports = routerActividadesComprometidas;
