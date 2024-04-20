const riesgoService = require('../service/riesgoServices');

async function crearRiesgo(req, res) {
    try {
        const riesgo = await riesgoService.crearRiesgo(req.body);
        return res.status(201).json(riesgo);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRiesgo(req, res) {
    try {
        const riesgo = await riesgoService.obtenerRiesgo();
        return res.status(200).json(riesgo);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRiesgoPorId(req, res) {
    const { id } = req.params;
    try {
        const riesgo = await riesgoService.obtenerRiesgoPorId(id);
        return res.status(200).json(riesgo);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarRiesgo(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const riesgo = await riesgoService.actualizarRiesgo(id, newData);
        return res.status(200).json(riesgo);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarRiesgo(req, res) {
    const { id } = req.params;
    try {
        await riesgoService.eliminarRiesgo(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearRiesgo,
    obtenerRiesgo,
    obtenerRiesgoPorId,
    actualizarRiesgo,
    eliminarRiesgo,
};
