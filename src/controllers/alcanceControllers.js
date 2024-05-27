const alcanceService = require('../service/alcanceServices');

async function crearAlcance(req, res) {
    try {
        const alcance = await alcanceService.crearAlcance(req.body);
        return res.status(201).json(alcance);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlcance(req, res) {
    try {
        const alcance = await alcanceService.obtenerAlcance();
        return res.status(200).json(alcance);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlcancePorId(req, res) {
    const { id } = req.params;
    try {
        const alcance = await alcanceService.obtenerAlcancePorId(id);
        return res.status(200).json(alcance);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAlcance(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const region = await alcanceService.actualizarAlcance(id, newData);
        return res.status(200).json(region);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAlcance(req, res) {
    const { id } = req.params;
    try {
        await alcanceService.eliminarAlcance(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearAlcance,
    obtenerAlcance,
    obtenerAlcancePorId,
    actualizarAlcance,
    eliminarAlcance,
};
