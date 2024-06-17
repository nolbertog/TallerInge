const alineamientoService = require('../../services/proyects/alineamiento.service');

async function crearAlineamiento(req, res, next) {
    try {
        const alineamiento = await alineamientoService.crearAlineamiento(req.body);
        res.status(201).json(alineamiento);
    } catch (error) {
        next(error);
    }
}

async function obtenerAlineamiento(req, res, next) {
    try {
        const alineamiento = await alineamientoService.obtenerAlineamiento();
        res.status(200).json(alineamiento);
    } catch (error) {
        next(error);
    }
}

async function obtenerAlineamientoPorId(req, res, next) {
    const { id } = req.params;
    try {
        const alineamiento = await alineamientoService.obtenerAlineamientoPorId(id);
        if (!alineamiento) {
            throw new Error('Alineamiento no encontrado');
        }
        res.status(200).json(alineamiento);
    } catch (error) {
        next(error);
    }
}

async function actualizarAlineamiento(req, res, next) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const alineamiento = await alineamientoService.actualizarAlineamiento(id, newData);
        if (!alineamiento) {
            throw new Error('Alineamiento no encontrado');
        }
        res.status(200).json(alineamiento);
    } catch (error) {
        next(error);
    }
}

async function eliminarAlineamiento(req, res, next) {
    const { id } = req.params;
    try {
        const alineamiento = await alineamientoService.eliminarAlineamiento(id);
        if (!alineamiento) {
            throw new Error('Alineamiento no encontrado');
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

// Middleware de manejo de errores
function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = {
    crearAlineamiento,
    obtenerAlineamiento,
    obtenerAlineamientoPorId,
    actualizarAlineamiento,
    eliminarAlineamiento,
    errorHandler,
};
