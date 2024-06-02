const listadoProfesoresParticipantesServices = require('../service/listadoProfesoresParticipantesServices');

async function crearListadoProfesoresParticipantes(req, res) {
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(listadoProfesoresParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoProfesoresParticipantes(req, res) {
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.obtenerRecursosComprometidos();
        return res.status(200).json(listadoProfesoresParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoProfesoresParticipantesPorId(req, res) {
    const { id } = req.params;
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(listadoProfesoresParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarListadoProfesoresParticipantes(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(listadoProfesoresParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarListadoProfesoresParticipantes(req, res) {
    const { id } = req.params;
    try {
        await listadoProfesoresParticipantesServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearListadoProfesoresParticipantes,
    obtenerListadoProfesoresParticipantes,
    obtenerListadoProfesoresParticipantesPorId,
    actualizarListadoProfesoresParticipantes,
    eliminarListadoProfesoresParticipantes,
};
