const Modalidad = require('../db/models/modalidad');

async function crearModalidad(modalidadData) {
    try {
        const modalidad = await Modalidad.create(modalidadData);
        return modalidad;
    } catch (error) {
        throw new Error('Error al crear la modalidad');
    }
}

async function obtenerModalidad() {
    try {
        const modalidad = await Modalidad.findAll();
        return modalidad;
    } catch (error) {
        throw new Error('Error al obtener la modalidad');
    }
}

async function obtenerModalidadPorId(id) {
    try {
        const modalidad = await Modalidad.findByPk(id);
        if (!modalidad) {
            throw new Error('Modalidad no encontrada');
        }
        return modalidad;
    } catch (error) {
        throw new Error('Error al obtener la modalidad por ID');
    }
}

async function actualizarModalidad(id, newData) {
    try {
        const [updated] = await Modalidad.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Modalidad no encontrada');
        }
        const modalidad = await Modalidad.findByPk(id);
        return modalidad;
    } catch (error) {
        throw new Error('Error al actualizar la modalidad');
    }
}

async function eliminarModalidad(id) {
    try {
        const deleted = await Modalidad.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Modalidad no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la modalidad');
    }
}

module.exports = {
    crearModalidad,
    obtenerModalidad,
    obtenerModalidadPorId,
    actualizarModalidad,
    eliminarModalidad,
};
