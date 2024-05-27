
const Aprobaciones = require('../db/models/aprobaciones');

async function crearaprobaciones(aprobacionesData) {
    try {
        const aprobaciones = await Aprobaciones.create(aprobacionesData);
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al crear la aprobaciones');
    }
}

async function obtenerAprobaciones() {
    try {
        const aprobaciones = await Aprobaciones.findAll();
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al obtener la aprobaciones');
    }
}

async function obtenerAprobacionesPorId(id) {
    try {
        const aprobaciones = await Aprobaciones.findByPk(id);
        if (!aprobaciones) {
            throw new Error('aprobaciones no encontrada');
        }
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al obtener la aprobaciones por ID');
    }
}

async function actualizaraprobaciones(id, newData) {
    try {
        const [updated] = await Aprobaciones.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Aprobacioes no encontrada');
        }
        const aprobaciones = await Aprobaciones.findByPk(id);
        return aprobaciones;
    } catch (error) {
        throw new Error('Error al actualizar la aprobaciones');
    }
}

async function eliminarAprobaciones(id) {
    try {
        const deleted = await Aprobaciones.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Aprobaciones no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la aprobaciones');
    }
}



module.exports = {
    crearaprobaciones,
    obtenerAprobaciones,
    obtenerAprobacionesPorId,
    actualizaraprobaciones,
    eliminarAprobaciones,
};
