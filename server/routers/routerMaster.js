const express = require('express');


const routerusuario = require('./usuario.Routes');

const Master = express()

Master.use(express.json())


Master.use(routerusuario)

module.exports = Master;