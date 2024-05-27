const areaService = require('../service/areaServices');

async function crearArea(req, res) {
    try {
        const area = await areaService.crearArea(req.body);
        return res.status(201).json(area);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerArea(req, res) {
    try {
        const area = await areaService.obtenerArea();
        return res.status(200).json(area);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAreaPorId(req, res) {
    const { id } = req.params;
    try {
        const area = await areaService.obtenerAreaPorId(id);
        return res.status(200).json(area);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarArea(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const area = await areaService.actualizarArea(id, newData);
        return res.status(200).json(area);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarArea(req, res) {
    const { id } = req.params;
    try {
        await areaService.eliminarArea(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearArea,
    obtenerArea,
    obtenerAreaPorId,
    actualizarArea,
    eliminarArea,
};
