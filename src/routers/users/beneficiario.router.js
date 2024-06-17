const express = require('express');
const routerBeneficiarios = express.Router();
const beneficiariosControllers = require('../../controllers/users/beneficiario.controller');
const permission = require('../../middleware/verificarPermisos');

routerBeneficiarios.use(express.json());

routerBeneficiarios.post('/beneficiarios',permission([1,2,3,5]), beneficiariosControllers.crearBeneficiarios);
routerBeneficiarios.get('/beneficiarios',permission([1,2,3,4,5,6]), beneficiariosControllers.obtenerBeneficiarios); 
routerBeneficiarios.get('/beneficiarios/:id',permission([1,2,3,4,5,6]), beneficiariosControllers.obtenerBeneficiariosPorId); 
routerBeneficiarios.put('/beneficiarios/:id',permission([1,2,3,5]), beneficiariosControllers.actualizarBeneficiarios);
routerBeneficiarios.delete('/beneficiarios/:id',permission([1,2]), beneficiariosControllers.eliminarBeneficiarios);

module.exports = routerBeneficiarios;
