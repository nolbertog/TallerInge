const express = require('express');


const routerusuario = require('./userRoute');
const routersede = require('./sedeRoute');
const routerRol = require('./rolRoute');
const routerRiesgo = require('./riesgoRoute');
const routerRegion = require('./regionRoute');
const routerProyecto = require('./proyectoRoute');


const Master = express()

Master.use(express.json())


Master.use(routerusuario)
Master.use(routersede)
Master.use(routerRol)
Master.use(routerRiesgo)
Master.use(routerRegion)
Master.use(routerProyecto)


module.exports = Master;