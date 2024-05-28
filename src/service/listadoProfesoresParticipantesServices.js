
const ListadoProfesoresParticipantes = require('../db/models/listadoProfesorParticipantes');

async function crearListadoProfesoresParticipantes(listadoProfesoresParticipantesData) {
    try {
        const listadoProfesoresParticipantes = await ListadoProfesoresParticipantes.create(listadoProfesoresParticipantesData);
        return listadoProfesoresParticipantes;
    } catch (error) {
        throw new Error('Error al crear los profesores participante');
    }
}

async function obtenerListadoProfesoresParticipantes() {
    try {
        const listadoProfesoresParticipantes = await ListadoProfesoresParticipantes.findAll();
        return listadoProfesoresParticipantes;
    } catch (error) {
        throw new Error('Error al obtener el profesores participante');
    }
}

async function obtenerListadoProfesoresParticipantesPorId(id) {
    try {
        const listadoProfesoresParticipantes = await ListadoProfesoresParticipantes.findByPk(id);
        if (!listadoProfesoresParticipantes) {
            throw new Error('profesores participante no encontrado');
        }
        return listadoProfesoresParticipantes;
    } catch (error) {
        throw new Error('Error al obtener la profesores participante por ID');
    }
}

async function actualizarListadoProfesoresParticipantes(id, newData) {
    try {
        const [updated] = await ListadoProfesoresParticipantes.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('profesores participante no encontrado');
        }
        const listadoProfesoresParticipantes = await ListadoProfesoresParticipantes.findByPk(id);
        return listadoProfesoresParticipantes;
    } catch (error) {
        throw new Error('Error al actualizar el profesores participante');
    }
}

async function eliminarListadoProfesoresParticipantes(id) {
    try {
        const deleted = await ListadoProfesoresParticipantes.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('profesores participante no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el profesores participante');
    }
}



module.exports = {
    crearListadoProfesoresParticipantes,
    obtenerListadoProfesoresParticipantes,
    obtenerListadoProfesoresParticipantesPorId,
    actualizarListadoProfesoresParticipantes,
    eliminarListadoProfesoresParticipantes,
};
