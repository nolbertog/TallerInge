const Alineamiento = require('../../db/models/proyects/alineamiento');

async function crearAlineamiento(alineamientoData) {
    try {
        const alineamiento = await Alineamiento.create(alineamientoData);
        return alineamiento;
    } catch (error) {
        throw new Error('Error al crear el alineamiento');
    }
}

async function obtenerAlineamiento() {
    try {
        const alineamiento = await Alineamiento.findAll();
        return alineamiento;
    } catch (error) {
        throw new Error('Error al obtener los alineamientos');
    }
}

async function obtenerAlineamientoPorId(id) {
    try {
        const alineamiento = await Alineamiento.findByPk(id);
        if (!alineamiento) {
            throw new Error('Alineamiento no encontrado');
        }
        return alineamiento;
    } catch (error) {
        throw new Error('Error al obtener el alineamiento por ID');
    }
}

async function actualizarAlineamiento(id, newData) {
    try {
        const [updated] = await Alineamiento.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Alineamiento no encontrado');
        }
        const alineamiento = await Alineamiento.findByPk(id);
        return alineamiento;
    } catch (error) {
        throw new Error('Error al actualizar el alineamiento');
    }
}

async function eliminarAlineamiento(id) {
    try {
        const deleted = await Alineamiento.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alineamiento no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el alineamiento');
    }
}

module.exports = {
    crearAlineamiento,
    obtenerAlineamiento,
    obtenerAlineamientoPorId,
    actualizarAlineamiento,
    eliminarAlineamiento,
};
