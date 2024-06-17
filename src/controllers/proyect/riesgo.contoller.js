const riesgoService = require('../../services/proyects/riesgo.service');

async function crearRiesgo(req, res) {
    try {
        const riesgo = await riesgoService.crearRiesgo(req.body);
        res.status(201).json(riesgo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRiesgo(req, res) {
    try {
        const riesgo = await riesgoService.obtenerRiesgo();
        res.status(200).json(riesgo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRiesgoPorId(req, res) {
    const { id } = req.params;
    try {
        const riesgo = await riesgoService.obtenerRiesgoPorId(id);
        if (!riesgo) {
            return res.status(404).json({ error: 'Riesgo not found' });
        }
        res.status(200).json(riesgo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarRiesgo(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const riesgo = await riesgoService.actualizarRiesgo(id, newData);
        if (!riesgo) {
            return res.status(404).json({ error: 'Riesgo not found' });
        }
        res.status(200).json(riesgo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarRiesgo(req, res) {
    const { id } = req.params;
    try {
        const riesgo = await riesgoService.eliminarRiesgo(id);
        if (!riesgo) {
            return res.status(404).json({ error: 'Riesgo not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearRiesgo,
    obtenerRiesgo,
    obtenerRiesgoPorId,
    actualizarRiesgo,
    eliminarRiesgo,
};
