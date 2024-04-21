const modalidadService = require('../service/modalidadServices');

async function crearModalidad(req, res) {
    try {
        const modalidad = await modalidadService.crearModalidad(req.body);
        return res.status(201).json(modalidad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerModalidad(req, res) {
    try {
        const modalidad = await modalidadService.obtenerModalidad();
        return res.status(200).json(modalidad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerModalidadPorId(req, res) {
    const { id } = req.params;
    try {
        const modalidad = await modalidadService.obtenerModalidadPorId(id);
        return res.status(200).json(modalidad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarModalidad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const modalidad = await modalidadService.actualizarModalidad(id, newData);
        return res.status(200).json(modalidad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarModalidad(req, res) {
    const { id } = req.params;
    try {
        await modalidadService.eliminarModalidad(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearModalidad,
    obtenerModalidad,
    obtenerModalidadPorId,
    actualizarModalidad,
    eliminarModalidad,
};
