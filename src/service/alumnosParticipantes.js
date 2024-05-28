
const AlumnosParticipantes = require('../db/models/alumnosParticipantes');

async function crearAlumnosParticipantes(alumnosParticipantesData) {
    try {
        const alumnosParticipantes = await AlbunFoto.create(alumnosParticipantesData);
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al crear la alumnos participantes');
    }
}

async function obtenerAlumnosParticipantes() {
    try {
        const alumnosParticipantes = await AlumnosParticipantes.findAll();
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al obtener la alumnos participantes');
    }
}

async function obtenerAlumnosParticipantesPorId(id) {
    try {
        const alumnosParticipantes = await AlumnosParticipantes.findByPk(id);
        if (!alumnosParticipantes) {
            throw new Error('alumno participante no encontrada');
        }
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al obtener la alumno participante por ID');
    }
}

async function actualizarAlumnosParticipantes(id, newData) {
    try {
        const [updated] = await AlumnosParticipantes.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('alumno participante no encontrada');
        }
        const alumnosParticipantes = await AlumnosParticipantes.findByPk(id);
        return alumnosParticipantes;
    } catch (error) {
        throw new Error('Error al actualizar la alumno participante');
    }
}

async function eliminarAlumnoParticipante(id) {
    try {
        const deleted = await AlumnosParticipantes.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alumno participante no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la alumno Participante');
    }
}



module.exports = {
    crearAlumnosParticipantes,
    obtenerAlumnosParticipantes,
    obtenerAlumnosParticipantesPorId,
    actualizarAlumnosParticipantes,
    eliminarAlumnoParticipante,
};
