const restriccionAprobacionService = require('../service/restriccionAprobacion');

async function crearRestriccionAprobacion(req, res) {
    try {
        const restriccionAprobacion = await restriccionAprobacionService.crearRestriccionAprobacion(req.body);
        res.status(201).json(restriccionAprobacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRestriccionAprobacion(req, res) {
    try {
        const restriccionAprobacion = await restriccionAprobacionService.obtenerRestriccionAprobacion();
        res.status(200).json(restriccionAprobacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRestriccionAprobacionPorId(req, res) {
    const { id } = req.params;
    try {
        const restriccionAprobacion = await restriccionAprobacionService.obtenerRestriccionAprobacionPorId(id);
        if (!restriccionAprobacion) {
            return res.status(404).json({ error: 'Restriccion de aprobacion no encontrada' });
        }
        res.status(200).json(restriccionAprobacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarRestriccionAprobacion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const restriccionAprobacion = await restriccionAprobacionService.actualizarRestriccionAprobacion(id, newData);
        if (!restriccionAprobacion) {
            return res.status(404).json({ error: 'Restriccion de aprobacion no encontrada' });
        }
        res.status(200).json(restriccionAprobacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarRestriccionAprobacion(req, res) {
    const { id } = req.params;
    try {
        const restriccionAprobacion = await restriccionAprobacionService.eliminarRestriccionAprobacion(id);
        if (!restriccionAprobacion) {
            return res.status(404).json({ error: 'Restriccion de aprobacion no encontrada' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearRestriccionAprobacion,
    obtenerRestriccionAprobacion,
    obtenerRestriccionAprobacionPorId,
    actualizarRestriccionAprobacion,
    eliminarRestriccionAprobacion,
};
