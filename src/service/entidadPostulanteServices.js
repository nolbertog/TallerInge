
const EntidadPostulante = require('../db/models/entidadPostulante');

async function crearEntidadPostulante(entidadPostulanteData) {
    try {
        const entidadPostulante = await EntidadPostulante.create(entidadPostulanteData);
        return entidadPostulante;
    } catch (error) {
        throw new Error('Error al crear la entidad Postulante');
    }
}

async function obtenerEntidadPostulante() {
    try {
        const entidadPostulante = await EntidadPostulante.findAll();
        return entidadPostulante;
    } catch (error) {
        throw new Error('Error al entidad Postulante');
    }
}

async function obtenerEntidadPostulantePorId(id) {
    try {
        const entidadPostulante = await EntidadPostulante.findByPk(id);
        if (!entidadPostulante) {
            throw new Error('entidad Postulante no encontrada');
        }
        return entidadPostulante;
    } catch (error) {
        throw new Error('Error al entidad Postulante por ID');
    }
}

async function actualizarEntidadPostulante(id, newData) {
    try {
        const [updated] = await EntidadPostulante.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('entidad Postulante no encontrada');
        }
        const entidadPostulante = await EntidadPostulante.findByPk(id);
        return entidadPostulante;
    } catch (error) {
        throw new Error('Error al actualizar la albun');
    }
}

async function eliminarEntidadPostulante(id) {
    try {
        const deleted = await EntidadPostulante.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Colaborador Externo no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar el Colaborador Externo');
    }
}



module.exports = {
    crearEntidadPostulante,
    obtenerEntidadPostulante,
    obtenerEntidadPostulantePorId,
    actualizarEntidadPostulante,
    eliminarEntidadPostulante,
};
