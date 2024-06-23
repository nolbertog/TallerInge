const sedeService = require('../../services/ucm/sede.services');

async function crearSede(req, res) {
    try {
        const sede = await sedeService.crearSede(req.body);
        res.status(201).json(sede);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerSede(req, res) {
    try {
        const sede = await sedeService.obtenerSede();
        res.status(200).json(sede);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerSedePorId(req, res) {
    const { id } = req.params;
    try {
        const sede = await sedeService.obtenerSedePorId(id);
        if (!sede) {
            res.status(404).json({ error: 'Sede not found' });
        } else {
            res.status(200).json(sede);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarSede(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const sede = await sedeService.actualizarSede(id, newData);
        if (!sede) {
            res.status(404).json({ error: 'Sede not found' });
        } else {
            res.status(200).json(sede);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarSede(req, res) {
    const { id } = req.params;
    try {
        const deletedSede = await sedeService.eliminarSede(id);
        if (!deletedSede) {
            res.status(404).json({ error: 'Sede not found' });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearSede,
    obtenerSede,
    obtenerSedePorId,
    actualizarSede,
    eliminarSede,
};
