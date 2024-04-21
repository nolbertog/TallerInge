const facultadService = require('../service/facultadServices');

async function crearFacultad(req, res) {
    try {
        const facultad = await facultadService.crearFacultad(req.body);
        return res.status(201).json(facultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerFacultad(req, res) {
    try {
        const facultad = await facultadService.obtenerFacultad();
        return res.status(200).json(facultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerFacultadPorId(req, res) {
    const { id } = req.params;
    try {
        const facultad = await facultadService.obtenerFacultadPorId(id);
        return res.status(200).json(facultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarFacultad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const facultad = await facultadService.actualizarFacultad(id, newData);
        return res.status(200).json(facultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarFacultad(req, res) {
    const { id } = req.params;
    try {
        await facultadService.eliminarFacultad(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearFacultad,
    obtenerFacultad,
    obtenerFacultadPorId,
    actualizarFacultad,
    eliminarFacultad,
};
