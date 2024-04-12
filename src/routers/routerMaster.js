const express = require('express');


const routerusuario = require('./userRoute');

const Master = express()

Master.use(express.json())


Master.use(routerusuario)

module.exports = Master;