const asignaturasParticipantesServices = require('../service/asignaturasParticipantesServices');

async function crearAsignaturasParticipantes(req, res) {
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.crearRecursosComprometidos(req.body);
        res.status(201).json(asignaturasParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAsignaturasParticipantes(req, res) {
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.obtenerRecursosComprometidos();
        res.status(200).json(asignaturasParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAsignaturasParticipantesPorId(req, res) {
    const { id } = req.params;
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.obtenerRecursosComprometidosPorId(id);
        if (!asignaturasParticipantes) {
            return res.status(404).json({ error: 'Asignaturas participantes not found' });
        }
        res.status(200).json(asignaturasParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAsignaturasParticipantes(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const asignaturasParticipantes = await asignaturasParticipantesServices.actualizarRecursosComprometidos(id, newData);
        if (!asignaturasParticipantes) {
            return res.status(404).json({ error: 'Asignaturas participantes not found' });
        }
        res.status(200).json(asignaturasParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAsignaturasParticipantes(req, res) {
    const { id } = req.params;
    try {
        const deletedCount = await asignaturasParticipantesServices.eliminarRecursosComprometidos(id);
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Asignaturas participantes not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAsignaturasParticipantes,
    obtenerAsignaturasParticipantes,
    obtenerAsignaturasParticipantesPorId,
    actualizarAsignaturasParticipantes,
    eliminarAsignaturasParticipantes,
};
