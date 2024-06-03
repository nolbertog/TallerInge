const areaService = require('../service/areaServices');

async function crearArea(req, res) {
    try {
        const area = await areaService.crearArea(req.body);
        res.status(201).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerArea(req, res) {
    try {
        const area = await areaService.obtenerArea();
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAreaPorId(req, res) {
    const { id } = req.params;
    try {
        const area = await areaService.obtenerAreaPorId(id);
        if (!area) {
            return res.status(404).json({ error: 'Area not found' });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarArea(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const area = await areaService.actualizarArea(id, newData);
        if (!area) {
            return res.status(404).json({ error: 'Area not found' });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarArea(req, res) {
    const { id } = req.params;
    try {
        await areaService.eliminarArea(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearArea,
    obtenerArea,
    obtenerAreaPorId,
    actualizarArea,
    eliminarArea,
};
