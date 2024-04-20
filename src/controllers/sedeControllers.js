const sedeService = require('../service/sedeServices');

async function crearSede(req, res) {
    try {
        const sede = await sedeService.crearSede(req.body);
        return res.status(201).json(sede);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerSede(req, res) {
    try {
        const sede = await sedeService.obtenerSede();
        return res.status(200).json(sede);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerSedePorId(req, res) {
    const { id } = req.params;
    try {
        const sede = await sedeService.obtenerSedePorId(id);
        return res.status(200).json(sede);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarSede(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const sede = await sedeService.actualizarSede(id, newData);
        return res.status(200).json(sede);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarSede(req, res) {
    const { id } = req.params;
    try {
        await sedeService.eliminarSede(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearSede,
    obtenerSede,
    obtenerSedePorId,
    actualizarSede,
    eliminarSede,
};
