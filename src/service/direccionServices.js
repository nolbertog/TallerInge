
const Direccion = require('../db/models/direccion');

async function crearDireccion(direccionData) {
    try {
        const direccion = await Direccion.create(direccionData);
        return direccion;
    } catch (error) {
        throw new Error('Error al crear la direccion');
    }
}

async function obtenerDireccion() {
    try {
        const direccion = await Direccion.findAll();
        return direccion;
    } catch (error) {
        throw new Error('Error al obtener la direccion');
    }
}

async function obtenerDireccionPorId(id) {
    try {
        const direccion = await Direccion.findByPk(id);
        if (!direccion) {
            throw new Error('direccion no encontrada');
        }
        return direccion;
    } catch (error) {
        throw new Error('Error al obtener la direccion por ID');
    }
}

async function actualizarDireccion(id, newData) {
    try {
        const [updated] = await Direccion.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Direccion no encontrada');
        }
        const direccion = await Direccion.findByPk(id);
        return direccion;
    } catch (error) {
        throw new Error('Error al actualizar la direccion');
    }
}

async function eliminarDireccion(id) {
    try {
        const deleted = await Direccion.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('direccion no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la direccion');
    }
}



module.exports = {
    crearDireccion,
    obtenerDireccion,
    obtenerDireccionPorId,
    actualizarDireccion,
    eliminarDireccion,
};
