const restriccionAprobacionService = require('../service/restriccionAprobacion');

async function crearRestriccionAprobacion(req, res) {
    try {
        const restriccionAprobacion = await restriccionAprobacionService.crearRestriccionAprobacion(req.body);
        return res.status(201).json(restriccionAprobacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRestriccionAprobacion(req, res) {
    try {
        const restriccionAprobacion = await restriccionAprobacionService.obtenerRestriccionAprobacion();
        return res.status(200).json(restriccionAprobacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRestriccionAprobacionPorId(req, res) {
    const { id } = req.params;
    try {
        const restriccionAprobacion = await restriccionAprobacionService.obtenerRestriccionAprobacionPorId(id);
        return res.status(200).json(restriccionAprobacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarRestriccionAprobacion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const restriccionAprobacion = await restriccionAprobacionService.actualizarRestriccionAprobacion(id, newData);
        return res.status(200).json(restriccionAprobacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarRestriccionAprobacion(req, res) {
    const { id } = req.params;
    try {
        await restriccionAprobacionService.eliminarRestriccionAprobacion(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearRestriccionAprobacion,
    obtenerRestriccionAprobacion,
    obtenerRestriccionAprobacionPorId,
    actualizarRestriccionAprobacion,
    eliminarRestriccionAprobacion,
};
