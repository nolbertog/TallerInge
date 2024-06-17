const modalidadService = require('../../services/proyects/modalidad.service');

async function crearModalidad(req, res) {
    try {
        const modalidad = await modalidadService.crearModalidad(req.body);
        res.status(201).json(modalidad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerModalidad(req, res) {
    try {
        const modalidad = await modalidadService.obtenerModalidad();
        res.status(200).json(modalidad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerModalidadPorId(req, res) {
    const { id } = req.params;
    try {
        const modalidad = await modalidadService.obtenerModalidadPorId(id);
        if (!modalidad) {
            res.status(404).json({ error: 'Modalidad no encontrada' });
        } else {
            res.status(200).json(modalidad);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarModalidad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const modalidad = await modalidadService.actualizarModalidad(id, newData);
        if (!modalidad) {
            res.status(404).json({ error: 'Modalidad no encontrada' });
        } else {
            res.status(200).json(modalidad);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarModalidad(req, res) {
    const { id } = req.params;
    try {
        const modalidad = await modalidadService.eliminarModalidad(id);
        if (!modalidad) {
            res.status(404).json({ error: 'Modalidad no encontrada' });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearModalidad,
    obtenerModalidad,
    obtenerModalidadPorId,
    actualizarModalidad,
    eliminarModalidad,
};
