const evidenciaService = require('../service/evidenciaServices');

async function crearEvidencia(req, res) {
    try {
        const evidencia = await evidenciaService.crearEvidencia(req.body);
        return res.status(201).json(evidencia);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerEvidencia(req, res) {
    try {
        const evidencia = await evidenciaService.obtenerEvidencia();
        return res.status(200).json(facultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerEvidenciaPorId(req, res) {
    const { id } = req.params;
    try {
        const evidencia = await evidenciaService.obtenerEvidenciaPorId(id);
        return res.status(200).json(evidencia);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarEvidencia(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const evidencia = await evidenciaService.actualizarEvidencia(id, newData);
        return res.status(200).json(facultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarEvidencia(req, res) {
    const { id } = req.params;
    try {
        await evidenciaService.eliminarEvidencia(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearEvidencia,
    obtenerEvidencia,
    obtenerEvidenciaPorId,
    actualizarEvidencia,
    eliminarEvidencia,
};
