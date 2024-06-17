const regionService = require('../../services/address/region.service');

async function crearRegion(req, res) {
    try {
        const region = await regionService.crearRegion(req.body);
        res.status(201).json(region);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRegion(req, res) {
    try {
        const region = await regionService.obtenerRegion();
        res.status(200).json(region);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRegionPorId(req, res) {
    const { id } = req.params;
    try {
        const region = await regionService.obtenerRegionPorId(id);
        if (!region) {
            res.status(404).json({ error: 'Region not found' });
        } else {
            res.status(200).json(region);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarRegion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const region = await regionService.actualizarRegion(id, newData);
        if (!region) {
            res.status(404).json({ error: 'Region not found' });
        } else {
            res.status(200).json(region);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarRegion(req, res) {
    const { id } = req.params;
    try {
        const region = await regionService.eliminarRegion(id);
        if (!region) {
            res.status(404).json({ error: 'Region not found' });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearRegion,
    obtenerRegion,
    obtenerRegionPorId,
    actualizarRegion,
    eliminarRegion,
};
