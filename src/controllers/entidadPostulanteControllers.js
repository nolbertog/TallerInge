const entidadPostulanteServices = require('../service/entidadPostulanteServices');

async function crearEntidadPostulante(req, res) {
    try {
        const entidadPostulante = await entidadPostulanteServices.crearEntidadPostulante(req.body);
        return res.status(201).json(entidadPostulante);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerEntidadPostulante(req, res) {
    try {
        const entidadPostulante = await entidadPostulanteServices.obtenerEntidadPostulante();
        return res.status(200).json(entidadPostulante);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerEntidadPostulantePorId(req, res) {
    const { id } = req.params;
    try {
        const entidadPostulante = await entidadPostulanteServices.obtenerEntidadPostulantePorId(id);
        return res.status(200).json(entidadPostulante);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarEntidadPostulante(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const entidadPostulante = await entidadPostulanteServices.actualizarEntidadPostulante(id, newData);
        return res.status(200).json(entidadPostulante);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarEntidadPostulante(req, res) {
    const { id } = req.params;
    try {
        await entidadPostulanteServices.eliminarEntidadPostulante(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearEntidadPostulante,
    obtenerEntidadPostulante,
    obtenerEntidadPostulantePorId,
    actualizarEntidadPostulante,
    eliminarEntidadPostulante,
};
