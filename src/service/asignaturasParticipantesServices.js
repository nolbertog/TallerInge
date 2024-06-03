const AsignaturasParticipantes = require('../db/models/asignaturasParticipantes');

async function crearAsignaturasParticipantes(asignaturasParticipantesData) {
    try {
        const asignaturasParticipantes = await AsignaturasParticipantes.create(asignaturasParticipantesData);
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al crear las asignaturas Participantes');
    }
}

async function obtenerAsignaturasParticipantes() {
    try {
        const asignaturasParticipantes = await AsignaturasParticipantes.findAll();
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al obtener las asignaturas Participantes');
    }
}

async function obtenerAsignaturasParticipantesPorId(id) {
    try {
        const asignaturasParticipantes = await AsignaturasParticipantes.findByPk(id);
        if (!asignaturasParticipantes) {
            throw new Error('Asignaturas Participantes no encontrada');
        }
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al obtener las asignaturas Participantes por ID');
    }
}

async function actualizarAsignaturasParticipantes(id, newData) {
    try {
        const [updated] = await AsignaturasParticipantes.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Asignaturas Participantes no encontrada');
        }
        const asignaturasParticipantes = await AsignaturasParticipantes.findByPk(id);
        return asignaturasParticipantes;
    } catch (error) {
        throw new Error('Error al actualizar las asignaturas Participantes');
    }
}

async function eliminarAsignaturasParticipantes(id) {
    try {
        const deleted = await AsignaturasParticipantes.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Asignaturas Participantes no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar las asignaturas Participantes');
    }
}

module.exports = {
    crearAsignaturasParticipantes,
    obtenerAsignaturasParticipantes,
    obtenerAsignaturasParticipantesPorId,
    actualizarAsignaturasParticipantes,
    eliminarAsignaturasParticipantes,
};
