const alineamientoService = require('../service/alineamientoServices');

async function crearAlineamiento(req, res) {
    try {
        const alineamiento = await alineamientoService.crearAlineamiento(req.body);
        res.status(201).json(alineamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlineamiento(req, res) {
    try {
        const alineamiento = await alineamientoService.obtenerAlineamiento();
        res.status(200).json(alineamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlineamientoPorId(req, res) {
    const { id } = req.params;
    try {
        const alineamiento = await alineamientoService.obtenerAlineamientoPorId(id);
        if (!alineamiento) {
            return res.status(404).json({ error: 'Alineamiento no encontrado' });
        }
        res.status(200).json(alineamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAlineamiento(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const alineamiento = await alineamientoService.actualizarAlineamiento(id, newData);
        if (!alineamiento) {
            return res.status(404).json({ error: 'Alineamiento no encontrado' });
        }
        res.status(200).json(alineamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAlineamiento(req, res) {
    const { id } = req.params;
    try {
        const alineamiento = await alineamientoService.eliminarAlineamiento(id);
        if (!alineamiento) {
            return res.status(404).json({ error: 'Alineamiento no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAlineamiento,
    obtenerAlineamiento,
    obtenerAlineamientoPorId,
    actualizarAlineamiento,
    eliminarAlineamiento,
};
