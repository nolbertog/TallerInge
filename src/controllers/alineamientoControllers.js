const alineamientoService = require('../service/alineamientoServices');

async function crearAlineamiento(req, res) {
    try {
        const alineamiento = await alineamientoService.crearAlineamiento(req.body);
        return res.status(201).json(alineamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlineamiento(req, res) {
    try {
        const alineamiento = await alineamientoService.obtenerAlineamiento();
        return res.status(200).json(alineamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlineamientoPorId(req, res) {
    const { id } = req.params;
    try {
        const alineamiento = await alineamientoService.obtenerAlineamientoPorId(id);
        return res.status(200).json(alineamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAlineamiento(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const alineamiento = await alineamientoService.actualizarAlineamiento(id, newData);
        return res.status(200).json(alineamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAlineamiento(req, res) {
    const { id } = req.params;
    try {
        await alineamientoService.eliminarAlineamiento(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearAlineamiento,
    obtenerAlineamiento,
    obtenerAlineamientoPorId,
    actualizarAlineamiento,
    eliminarAlineamiento,
};
