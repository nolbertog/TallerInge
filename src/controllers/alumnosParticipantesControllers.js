const listadoAlumnosVoluntariosServices = require('../service/listadoAlumnosVoluntariosServices');

async function crearAlumnosParticipantes(req, res) {
    try {
        const alumnosParticipantes = await listadoAlumnosVoluntariosServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(alumnosParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlumnosParticipantes(req, res) {
    try {
        const alumnosParticipantes = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidos();
        return res.status(200).json(alumnosParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlumnosParticipantesPorId(req, res) {
    const { id } = req.params;
    try {
        const alumnosParticipantes = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(alumnosParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAlumnosParticipantes(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const alumnosParticipantes = await listadoAlumnosVoluntariosServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(alumnosParticipantes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAlumnosParticipantes(req, res) {
    const { id } = req.params;
    try {
        await listadoAlumnosVoluntariosServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAlumnosParticipantes,
    obtenerAlumnosParticipantes,
    obtenerAlumnosParticipantesPorId,
    actualizarAlumnosParticipantes,
    eliminarAlumnosParticipantes,
};
