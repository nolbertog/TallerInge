const entidadPostulanteServices = require('../../services/users/entidadPostulante.service');

async function crearEntidadPostulante(req, res) {
    try {
        const entidadPostulante = await entidadPostulanteServices.crearEntidadPostulante(req.body);
        res.status(201).json(entidadPostulante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerEntidadPostulante(req, res) {
    try {
        const entidadPostulante = await entidadPostulanteServices.obtenerEntidadPostulante();
        res.status(200).json(entidadPostulante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerEntidadPostulantePorId(req, res) {
    const { id } = req.params;
    try {
        const entidadPostulante = await entidadPostulanteServices.obtenerEntidadPostulantePorId(id);
        if (!entidadPostulante) {
            return res.status(404).json({ error: 'Entidad postulante no encontrada' });
        }
        res.status(200).json(entidadPostulante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarEntidadPostulante(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const entidadPostulante = await entidadPostulanteServices.actualizarEntidadPostulante(id, newData);
        if (!entidadPostulante) {
            return res.status(404).json({ error: 'Entidad postulante no encontrada' });
        }
        res.status(200).json(entidadPostulante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarEntidadPostulante(req, res) {
    const { id } = req.params;
    try {
        const entidadPostulante = await entidadPostulanteServices.eliminarEntidadPostulante(id);
        if (!entidadPostulante) {
            return res.status(404).json({ error: 'Entidad postulante no encontrada' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearEntidadPostulante,
    obtenerEntidadPostulante,
    obtenerEntidadPostulantePorId,
    actualizarEntidadPostulante,
    eliminarEntidadPostulante,
};
