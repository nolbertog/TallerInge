
const AsignaturasParticipantes = require('../db/models/asignaturasParticipantes');

async function crearAsignaturasParticipantes(asignaturasParticipantesData) {
    try {
        const asignaturasParticipantes = await AsignaturasParticipantes.create(asignaturasParticipantesData);
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al crear la asignaturas Participantes');
    }
}

async function obtenerAsignaturasParticipantes() {
    try {
        const asignaturasParticipantes = await AsignaturasParticipantes.findAll();
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al obtener la asignaturas Participantes');
    }
}

async function obtenerAsignaturasParticipantesPorId(id) {
    try {
        const asignaturasParticipantes = await AsignaturasParticipantes.findByPk(id);
        if (!asignaturasParticipantes) {
            throw new Error('asignaturas Participantes no encontrada');
        }
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al obtener la asignaturas Participantes por ID');
    }
}

async function actualizarAsignaturasParticipantes(id, newData) {
    try {
        const [updated] = await AsignaturasParticipantes.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('asignaturas Participantes no encontrada');
        }
        const asignaturasParticipantes = await AsignaturasParticipantes.findByPk(id);
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al actualizar la asignaturas Participantes');
    }
}

async function eliminarAsignaturasParticipantes(id) {
    try {
        const deleted = await AsignaturasParticipantes.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('asignaturas Participantes no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la asignaturas Participantes');
    }
}



module.exports = {
    crearAsignaturasParticipantes,
    obtenerAsignaturasParticipantes,
    obtenerAsignaturasParticipantesPorId,
    actualizarAsignaturasParticipantes,
    eliminarAsignaturasParticipantes,
};
