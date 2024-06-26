const listadoAlumnosParticipantesServices = require('../../services/users/alumnosParticipantes.service');

async function crearAlumnosParticipantes(req, res) {
    try {
        const alumnosParticipantes = await listadoAlumnosParticipantesServices.crearAlumnosParticipantes(req.body);
        res.status(201).json(alumnosParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlumnosParticipantes(req, res) {
    try {
        const alumnosParticipantes = await listadoAlumnosParticipantesServices.obtenerAlumnosParticipantes();
        res.status(200).json(alumnosParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlumnosParticipantesPorId(req, res) {
    const { id } = req.params;
    try {
        const alumnosParticipantes = await listadoAlumnosParticipantesServices.obtenerAlumnosParticipantesPorId(id);
        if (!alumnosParticipantes) {
            return res.status(404).json({ error: 'Alumnos participantes not found' });
        }
        res.status(200).json(alumnosParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAlumnosParticipantes(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const alumnosParticipantes = await listadoAlumnosParticipantesServices.actualizarAlumnosParticipantes(id, newData);
        if (!alumnosParticipantes) {
            return res.status(404).json({ error: 'Alumnos participantes not found' });
        }
        res.status(200).json(alumnosParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAlumnosParticipantes(req, res) {
    const { id } = req.params;
    try {
        await listadoAlumnosParticipantesServices.eliminarAlumnoParticipantes(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAlumnosParticipantes,
    obtenerAlumnosParticipantes,
    obtenerAlumnosParticipantesPorId,
    actualizarAlumnosParticipantes,
    eliminarAlumnosParticipantes,
};
