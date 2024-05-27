const aprobacionesService = require('../service/aprobacionesServices');

async function crearAprobaciones(req, res) {
    try {
        const aprobaciones = await aprobacionesService.crearAprobaciones(req.body);
        return res.status(201).json(aprobaciones);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAprobaciones(req, res) {
    try {
        const aprobaciones = await aprobacionesService.obtenerAprobaciones();
        return res.status(200).json(aprobaciones);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAprobacionesPorId(req, res) {
    const { id } = req.params;
    try {
        const aprobaciones = await aprobacionesService.obtenerAprobacionesPorId(id);
        return res.status(200).json(aprobaciones);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAprobaciones(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const aprobaciones = await aprobacionesService.actualizarAprobaciones(id, newData);
        return res.status(200).json(aprobaciones);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAprobaciones(req, res) {
    const { id } = req.params;
    try {
        await aprobacionesService.eliminarAprobaciones(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearAprobaciones,
    obtenerAprobaciones,
    obtenerAprobacionesPorId,
    actualizarAprobaciones,
    eliminarAprobaciones,
};
