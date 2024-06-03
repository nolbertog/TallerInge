const aprobacionesService = require('../service/aprobacionesServices');

async function crearAprobaciones(req, res) {
    try {
        const aprobaciones = await aprobacionesService.crearAprobaciones(req.body);
        res.status(201).json(aprobaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAprobaciones(req, res) {
    try {
        const aprobaciones = await aprobacionesService.obtenerAprobaciones();
        res.status(200).json(aprobaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAprobacionesPorId(req, res) {
    const { id } = req.params;
    try {
        const aprobaciones = await aprobacionesService.obtenerAprobacionesPorId(id);
        if (!aprobaciones) {
            res.status(404).json({ error: 'Aprobaciones not found' });
        } else {
            res.status(200).json(aprobaciones);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAprobaciones(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const aprobaciones = await aprobacionesService.actualizarAprobaciones(id, newData);
        if (!aprobaciones) {
            res.status(404).json({ error: 'Aprobaciones not found' });
        } else {
            res.status(200).json(aprobaciones);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAprobaciones(req, res) {
    const { id } = req.params;
    try {
        await aprobacionesService.eliminarAprobaciones(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAprobaciones,
    obtenerAprobaciones,
    obtenerAprobacionesPorId,
    actualizarAprobaciones,
    eliminarAprobaciones,
};
