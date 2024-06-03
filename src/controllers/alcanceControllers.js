const alcanceService = require('../service/alcanceServices');

async function crearAlcance(req, res) {
    try {
        const alcance = await alcanceService.crearAlcance(req.body);
        res.status(201).json(alcance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlcance(req, res) {
    try {
        const alcance = await alcanceService.obtenerAlcance();
        res.status(200).json(alcance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlcancePorId(req, res) {
    const { id } = req.params;
    try {
        const alcance = await alcanceService.obtenerAlcancePorId(id);
        if (!alcance) {
            return res.status(404).json({ error: 'Alcance no encontrado' });
        }
        res.status(200).json(alcance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAlcance(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const alcance = await alcanceService.actualizarAlcance(id, newData);
        if (!alcance) {
            return res.status(404).json({ error: 'Alcance no encontrado' });
        }
        res.status(200).json(alcance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAlcance(req, res) {
    const { id } = req.params;
    try {
        const alcance = await alcanceService.eliminarAlcance(id);
        if (!alcance) {
            return res.status(404).json({ error: 'Alcance no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAlcance,
    obtenerAlcance,
    obtenerAlcancePorId,
    actualizarAlcance,
    eliminarAlcance,
};
