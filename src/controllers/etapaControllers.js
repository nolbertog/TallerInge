const etapaService = require('../service/etapaServices');

async function crearEtapa(req, res) {
    try {
        const etapa = await etapaService.crearEtapa(req.body);
        return res.status(201).json(etapa);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerEtapa(req, res) {
    try {
        const etapa = await etapaService.obtenerEtapa();
        return res.status(200).json(etapa);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerEtapaPorId(req, res) {
    const { id } = req.params;
    try {
        const etapa = await etapaService.obtenerEtapaPorId(id);
        return res.status(200).json(etapa);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarEtapa(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const etapa = await etapaService.actualizarEtapa(id, newData);
        return res.status(200).json(etapa);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarEtapa(req, res) {
    const { id } = req.params;
    try {
        await modalidadService.eliminarEtapa(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearEtapa,
    obtenerEtapa,
    obtenerEtapaPorId,
    actualizarEtapa,
    eliminarEtapa,
};
