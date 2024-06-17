const Aprobaciones = require('../../db/models/proyects/aprobacion');

async function crearAprobaciones(aprobacionesData) {
    try {
        const aprobaciones = await Aprobaciones.create(aprobacionesData);
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al crear las aprobaciones');
    }
}

async function obtenerAprobaciones() {
    try {
        const aprobaciones = await Aprobaciones.findAll();
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al obtener las aprobaciones');
    }
}

async function obtenerAprobacionesPorId(id) {
    try {
        const aprobaciones = await Aprobaciones.findByPk(id);
        if (!aprobaciones) {
            throw new Error('Aprobaciones no encontrada');
        }
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al obtener las aprobaciones por ID');
    }
}

async function actualizarAprobaciones(id, newData) {
    try {
        const [updated] = await Aprobaciones.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Aprobaciones no encontrada');
        }
        const aprobaciones = await Aprobaciones.findByPk(id);
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al actualizar las aprobaciones');
    }
}

async function eliminarAprobaciones(id) {
    try {
        const deleted = await Aprobaciones.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Aprobaciones no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar las aprobaciones');
    }
}

module.exports = {
    crearAprobaciones,
    obtenerAprobaciones,
    obtenerAprobacionesPorId,
    actualizarAprobaciones,
    eliminarAprobaciones,
};
