const express = require('express');

const routePaths = [
    './userRoute',
    './sedeRoute',
    './rolRoute',
    './riesgoRoute',
    './regionRoute',
    './proyectoRoute',
    './modalidadRoute.',
    './facultadRoute',
    './evidenciaRoute',
    './etapaRoute',
    './documentoRoute',
    './divulgacionRoute',
    './dificultadRoute',
    './comunaRouter',
    './ciudadRouter',
    './carreraRouter',
    './direccionRouter',
    './beneficiariosRouter',
    './areaRouter',
    './aprobacionesRouter',
    './ambitoRouter',
    './alineamientoRouter',
    './alcanceRouter',
    './actividadesComprometidasRouter',
    './albunFotoRouter',
    './alumnosParticipantesRouter',
    './asignaturasParticipantesRouter',
    './colaboradorExternoRouter',
    './entidadPostulanteRouter',
    './fuenteFinanciamientoRouter',
    './listadoAlumnosVoluntariosRouter',
    './listadoProfesoresParticipantes',
    './recursosComprometidosRouter',
    './restriccionAprobacionRouter'
];

const routes = routePaths.map(route => require(route));

const Master = express()

Master.use(express.json())

routes.forEach(route => Master.use(route));

module.exports = Master;