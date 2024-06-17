const RestriccionAprobacionService = require('../../db/models/proyects/restriccionAprobacion');

async function crearRestriccionAprobacion(restriccionAprobacionData) {
    try {
        const restriccionAprobacion = await RestriccionAprobacionService.create(restriccionAprobacionData);
        return restriccionAprobacion;
    } catch (error) {
        throw new Error('Error al crear la restriccion');
    }
}

async function obtenerRestriccionAprobacion() {
    try {
        const restriccionAprobacion = await RestriccionAprobacionService.findAll();
        return restriccionAprobacion;
    } catch (error) {
        throw new Error('Error al obtener la restriccion');
    }
}

async function obtenerRestriccionAprobacionPorId(id) {
    try {
        const restriccionAprobacion = await RestriccionAprobacionService.findByPk(id);
        if (!restriccionAprobacion) {
            throw new Error('Restriccion no encontrada');
        }
        return restriccionAprobacion;
    } catch (error) {
        throw new Error('Error al obtener la restriccion por ID');
    }
}

async function actualizarRestriccionAprobacion(id, newData) {
    try {
        const [updated] = await RestriccionAprobacionService.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Restriccion no encontrada');
        }
        const restriccionAprobacion = await RestriccionAprobacionService.findByPk(id);
        return restriccionAprobacion;
    } catch (error) {
        throw new Error('Error al actualizar la restriccion');
    }
}

async function eliminarRestriccionAprobacion(id) {
    try {
        const deleted = await RestriccionAprobacionService.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Restriccion no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la restriccion');
    }
}

module.exports = {
    crearRestriccionAprobacion,
    obtenerRestriccionAprobacion,
    obtenerRestriccionAprobacionPorId,
    actualizarRestriccionAprobacion,
    eliminarRestriccionAprobacion,
};
