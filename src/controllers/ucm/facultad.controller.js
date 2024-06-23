const facultadService = require('../../services/ucm/facultad.services');

async function crearFacultad(req, res) {
    try {
        const facultad = await facultadService.crearFacultad(req.body);
        res.status(201).json(facultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerFacultad(req, res) {
    try {
        const facultad = await facultadService.obtenerFacultad();
        res.status(200).json(facultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerFacultadPorId(req, res) {
    const { id } = req.params;
    try {
        const facultad = await facultadService.obtenerFacultadPorId(id);
        if (!facultad) {
            return res.status(404).json({ error: 'Facultad not found' });
        }
        res.status(200).json(facultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarFacultad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const facultad = await facultadService.actualizarFacultad(id, newData);
        if (!facultad) {
            return res.status(404).json({ error: 'Facultad not found' });
        }
        res.status(200).json(facultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarFacultad(req, res) {
    const { id } = req.params;
    try {
        const deletedFacultad = await facultadService.eliminarFacultad(id);
        if (!deletedFacultad) {
            return res.status(404).json({ error: 'Facultad not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearFacultad,
    obtenerFacultad,
    obtenerFacultadPorId,
    actualizarFacultad,
    eliminarFacultad,
};
