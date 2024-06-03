const Direccion = require('../db/models/direccion');

async function crearDireccion(direccionData) {
    try {
        const direccion = await Direccion.create(direccionData);
        return direccion;
    } catch (error) {
        throw new Error('Error al crear la dirección');
    }
}

async function obtenerDireccion() {
    try {
        const direccion = await Direccion.findAll();
        return direccion;
    } catch (error) {
        throw new Error('Error al obtener las direcciones');
    }
}

async function obtenerDireccionPorId(id) {
    try {
        const direccion = await Direccion.findByPk(id);
        if (!direccion) {
            throw new Error('Dirección no encontrada');
        }
        return direccion;
    } catch (error) {
        throw new Error('Error al obtener la dirección por ID');
    }
}

async function actualizarDireccion(id, newData) {
    try {
        const [updated] = await Direccion.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Dirección no encontrada');
        }
        const direccion = await Direccion.findByPk(id);
        return direccion;
    } catch (error) {
        throw new Error('Error al actualizar la dirección');
    }
}

async function eliminarDireccion(id) {
    try {
        const deleted = await Direccion.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Dirección no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la dirección');
    }
}

module.exports = {
    crearDireccion,
    obtenerDireccion,
    obtenerDireccionPorId,
    actualizarDireccion,
    eliminarDireccion,
};
