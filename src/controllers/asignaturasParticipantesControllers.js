const asignaturasParticipantesServices = require('../service/asignaturasParticipantesServices');

async function crearAsignaturasParticipantes(req, res) {
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(asignaturasParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAsignaturasParticipantes(req, res) {
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.obtenerRecursosComprometidos();
        return res.status(200).json(asignaturasParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAsignaturasParticipantesPorId(req, res) {
    const { id } = req.params;
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(asignaturasParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAsignaturasParticipantes(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(asignaturasParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAsignaturasParticipantes(req, res) {
    const { id } = req.params;
    try {
        await asignaturasParticipantesServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAsignaturasParticipantes,
    obtenerAsignaturasParticipantes,
    obtenerAsignaturasParticipantesPorId,
    actualizarAsignaturasParticipantes,
    eliminarAsignaturasParticipantes,
};
