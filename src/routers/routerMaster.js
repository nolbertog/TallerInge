const express = require('express');


const routerusuario = require('./userRoute');
const routersede = require('./sedeRoute');
const routerRol = require('./rolRoute');
const routerRiesgo = require('./riesgoRoute');
const routerRegion = require('./regionRoute');
const routerProyecto = require('./proyectoRoute');
const routerModalidad = require('./modalidadRoute.');
const routerFacultad = require('./facultadRoute');
const routerEvidencia = require('./evidenciaRoute');
const routerEtapa = require('./etapaRoute');
const routerDocumento = require('./documentoRoute');
const routerDivulgacion = require('./divulgacionRoute');
const routerDificultad = require('./dificultadRoute');
const routerComuna = require('./comunaRouter');
const routerCiudad = require('./ciudadRouter');
const routerCarrera = require('./carreraRouter');
const routerDireccion = require('./direccionRouter');
const routerBeneficiarios = require('./beneficiariosRouter');
const routerArea = require('./areaRouter');
const routerAprobaciones = require('./aprobacionesRouter');
const routerAmbito = require('./ambitoRouter');
const routerAlineamiento = require('./alineamientoRouter');
const routerAlcance = require('./alcanceRouter');


const Master = express()

Master.use(express.json())


Master.use(routerusuario)
Master.use(routersede)
Master.use(routerRol)
Master.use(routerRiesgo)
Master.use(routerRegion)
Master.use(routerProyecto)
Master.use(routerModalidad)
Master.use(routerFacultad)
Master.use(routerEvidencia)
Master.use(routerEtapa)
Master.use(routerDocumento)
Master.use(routerDivulgacion)
Master.use(routerDificultad)
Master.use(routerComuna)
Master.use(routerCiudad)
Master.use(routerCarrera)
Master.use(routerDireccion)
Master.use(routerBeneficiarios)
Master.use(routerArea)
Master.use(routerAprobaciones)
Master.use(routerAmbito)
Master.use(routerAlineamiento)
Master.use(routerAlcance)


module.exports = Master;