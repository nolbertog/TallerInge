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
        throw new Error('Error al obtener la entidad Postulante');
    }
}

async function obtenerEntidadPostulantePorId(id) {
    try {
        const entidadPostulante = await EntidadPostulante.findByPk(id);
        if (!entidadPostulante) {
            throw new Error('Entidad Postulante no encontrada');
        }
        return entidadPostulante;
    } catch (error) {
        throw new Error('Error al obtener la entidad Postulante por ID');
    }
}

async function actualizarEntidadPostulante(id, newData) {
    try {
        const [updated] = await EntidadPostulante.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Entidad Postulante no encontrada');
        }
        const entidadPostulante = await EntidadPostulante.findByPk(id);
        return entidadPostulante;
    } catch (error) {
        throw new Error('Error al actualizar la entidad Postulante');
    }
}

async function eliminarEntidadPostulante(id) {
    try {
        const deleted = await EntidadPostulante.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Entidad Postulante no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la entidad Postulante');
    }
}

module.exports = {
    crearEntidadPostulante,
    obtenerEntidadPostulante,
    obtenerEntidadPostulantePorId,
    actualizarEntidadPostulante,
    eliminarEntidadPostulante,
};
