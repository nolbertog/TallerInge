const regionService = require('../service/regionServices');

async function crearRegion(req, res) {
    try {
        const region = await riesgoService.crearRegion(req.body);
        return res.status(201).json(region);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRegion(req, res) {
    try {
        const region = await regionService.obtenerRegion();
        return res.status(200).json(region);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRegionPorId(req, res) {
    const { id } = req.params;
    try {
        const region = await regionService.obtenerRegionPorId(id);
        return res.status(200).json(region);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarRegion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const region = await regionService.actualizarRegion(id, newData);
        return res.status(200).json(region);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarRegion(req, res) {
    const { id } = req.params;
    try {
        await regionService.eliminarRegion(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearRegion,
    obtenerRegion,
    obtenerRegionPorId,
    actualizarRegion,
    eliminarRegion,
};
