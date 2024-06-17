const evidenciaService = require('../../services/documents/evidencia.service');

async function crearEvidencia(req, res) {
    try {
        const evidencia = await evidenciaService.crearEvidencia(req.body);
        res.status(201).json(evidencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerEvidencia(req, res) {
    try {
        const evidencia = await evidenciaService.obtenerEvidencia();
        res.status(200).json(evidencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerEvidenciaPorId(req, res) {
    const { id } = req.params;
    try {
        const evidencia = await evidenciaService.obtenerEvidenciaPorId(id);
        if (!evidencia) {
            return res.status(404).json({ error: 'Evidencia no encontrada' });
        }
        res.status(200).json(evidencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarEvidencia(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const evidencia = await evidenciaService.actualizarEvidencia(id, newData);
        if (!evidencia) {
            return res.status(404).json({ error: 'Evidencia no encontrada' });
        }
        res.status(200).json(evidencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarEvidencia(req, res) {
    const { id } = req.params;
    try {
        await evidenciaService.eliminarEvidencia(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearEvidencia,
    obtenerEvidencia,
    obtenerEvidenciaPorId,
    actualizarEvidencia,
    eliminarEvidencia,
};
