const express = require('express');
const actividadesComprometidasControllers = require('../controllers/actividadesContrometidasControllers'); 

const routerActividadesComprometidas = express.Router();

routerActividadesComprometidas.use(express.json());

routerActividadesComprometidas.post('/actividadesComprometidas', actividadesComprometidasControllers.crearActividadesComprometidas);
routerActividadesComprometidas.get('/actividadesComprometidas', actividadesComprometidasControllers.obtenerActividadesComprometidas); 
routerActividadesComprometidas.get('/actividadesComprometidas/:id', actividadesComprometidasControllers.obtenerActividadesComprometidasPorId); 
routerActividadesComprometidas.put('/actividadesComprometidas/:id', actividadesComprometidasControllers.actualizarActividadesComprometidas);
routerActividadesComprometidas.delete('/actividadesComprometidas/:id', actividadesComprometidasControllers.eliminarActividadesComprometidas);

module.exports = routerActividadesComprometidas;
