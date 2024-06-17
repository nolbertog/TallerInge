const express = require('express');

const routePaths = [
    // Address Routes
    './address/region.route',
    './address/comuna.router',
    './address/ciudad.router',
    './address/direccion.router',

// Auth Routes
    './auth/auth.Route',
    './auth/recuperarPassword.route',

// Documents Routes
    './documents/evidencia.route',
    './documents/document.route',

// Projects Routes
    './proyects/riesgo.route',
    './proyects/proyecto.route',
    './proyects/modalidad.route',
    './proyects/etapa.route',
    './proyects/dificultad.route',
    './proyects/area.router',
    './proyects/aprobacion.router',
    './proyects/ambito.router',
    './proyects/alineamiento.router',
    './proyects/alcance.router',
    './proyects/actividadComprometida.router',
    './proyects/albunFoto.router',
    './proyects/fuenteFinanciamiento.router',
    './proyects/recursoComprometido.router',
    './proyects/restriccionAprobacion.router',

// UCM Routes
    './ucm/sede.route',
    './ucm/facultad.route',
    './ucm/divulgacion.route',
    './ucm/carrera.router',
    './ucm/asignaturaParticipante.router',

// Users Routes
    './users/user.route',
    './users/rol.route',
    './users/beneficiario.router',
    './users/alumnoParticipante.router',
    './users/colaboradorExterno.router',
    './users/entidadPostulante.router',
    './users/alumnoVoluntario.router',
    './users/profesorParticipante.route',

];

const routes = routePaths.map(route => require(route));

const Master = express()

Master.use(express.json())

routes.forEach(route => Master.use(route));

module.exports = Master;