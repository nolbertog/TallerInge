const express = require('express');
const routerBeneficiarios = express.Router();
const beneficiariosControllers = require('../controllers/beneficiariosControllers'); 

routerBeneficiarios.use(express.json());

routerBeneficiarios.post('/beneficiarios', beneficiariosControllers.crearBeneficiarios);
routerBeneficiarios.get('/beneficiarios', beneficiariosControllers.obtenerBeneficiarios); 
routerBeneficiarios.get('/beneficiarios/:id', beneficiariosControllers.obtenerBeneficiariosPorId); 
routerBeneficiarios.put('/beneficiarios/:id', beneficiariosControllers.actualizarBeneficiarios);
routerBeneficiarios.delete('/beneficiarios/:id', beneficiariosControllers.eliminarBeneficiarios);

module.exports = routerBeneficiarios;
