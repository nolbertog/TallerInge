const listadoProfesoresParticipantesServices = require('../../services/users/listadoProfesoresParticipantes.service');

async function crearListadoProfesoresParticipantes(req, res) {
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.crearListadoProfesoresParticipantes(req.body);
        res.status(201).json(listadoProfesoresParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoProfesoresParticipantes(req, res) {
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.obtenerListadoProfesoresParticipantes();
        res.status(200).json(listadoProfesoresParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoProfesoresParticipantesPorId(req, res) {
    const { id } = req.params;
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.obtenerListadoProfesoresParticipantesPorId(id);
        if (!listadoProfesoresParticipantes) {
            return res.status(404).json({ error: 'Listado de profesores participantes no encontrado' });
        }
        res.status(200).json(listadoProfesoresParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarListadoProfesoresParticipantes(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const listadoProfesoresParticipantes = await listadoProfesoresParticipantesServices.actualizarListadoProfesoresParticipantes(id, newData);
        if (!listadoProfesoresParticipantes) {
            return res.status(404).json({ error: 'Listado de profesores participantes no encontrado' });
        }
        res.status(200).json(listadoProfesoresParticipantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarListadoProfesoresParticipantes(req, res) {
    const { id } = req.params;
    try {
        const result = await listadoProfesoresParticipantesServices.eliminarListadoProfesoresParticipantes(id);
        if (!result) {
            return res.status(404).json({ error: 'Listado de profesores participantes no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearListadoProfesoresParticipantes,
    obtenerListadoProfesoresParticipantes,
    obtenerListadoProfesoresParticipantesPorId,
    actualizarListadoProfesoresParticipantes,
    eliminarListadoProfesoresParticipantes,
};
