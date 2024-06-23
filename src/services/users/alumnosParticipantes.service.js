const AlumnosParticipantesService = require('../../db/models/users/alumnoParticipante');

async function crearAlumnosParticipantes(alumnosParticipantesData) {
    try {
        const alumnosParticipantes = await AlbunFoto.create(alumnosParticipantesData);
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al crear los alumnos participantes');
    }
}

async function obtenerAlumnosParticipantes() {
    try {
        const alumnosParticipantes = await AlumnosParticipantesService.findAll();
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al obtener los alumnos participantes');
    }
}

async function obtenerAlumnosParticipantesPorId(id) {
    try {
        const alumnosParticipantes = await AlumnosParticipantesService.findByPk(id);
        if (!alumnosParticipantes) {
            throw new Error('Alumno participante no encontrado');
        }
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al obtener el alumno participante por ID');
    }
}

async function actualizarAlumnosParticipantes(id, newData) {
    try {
        const [updated] = await AlumnosParticipantesService.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Alumno participante no encontrado');
        }
        const alumnosParticipantes = await AlumnosParticipantesService.findByPk(id);
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al actualizar el alumno participante');
    }
}

async function eliminarAlumnoParticipante(id) {
    try {
        const deleted = await AlumnosParticipantesService.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alumno participante no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el alumno participante');
    }
}

module.exports = {
    crearAlumnosParticipantes,
    obtenerAlumnosParticipantes,
    obtenerAlumnosParticipantesPorId,
    actualizarAlumnosParticipantes,
    eliminarAlumnoParticipante,
};
