
const Alineamiento = require('../db/models/alineamiento');

async function crearAlineamiento(alineamientoData) {
    try {
        const alineamiento = await Alineamiento.create(alineamientoData);
        return alineamiento;
    } catch (error) {
        throw new Error('Error al crear la alineamiento');
    }
}

async function obtenerAlineamiento() {
    try {
        const alineamiento = await Alineamiento.findAll();
        return alineamiento;
    } catch (error) {
        throw new Error('Error al obtener la alineamiento');
    }
}

async function obtenerAlineamientoPorId(id) {
    try {
        const alineamiento = await Alineamiento.findByPk(id);
        if (!alineamiento) {
            throw new Error('alineamiento no encontrada');
        }
        return alineamiento;
    } catch (error) {
        throw new Error('Error al obtener la alineamiento por ID');
    }
}

async function actualizarAlineamiento(id, newData) {
    try {
        const [updated] = await Alineamiento.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Alineamiento no encontrada');
        }
        const alineamiento = await Alineamiento.findByPk(id);
        return alineamiento;
    } catch (error) {
        throw new Error('Error al actualizar la alineamiento');
    }
}

async function eliminarAlineamiento(id) {
    try {
        const deleted = await Alineamiento.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alineamiento no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la alineamiento');
    }
}



module.exports = {
    crearAlineamiento,
    obtenerAlineamiento,
    obtenerAlineamientoPorId,
    actualizarAlineamiento,
    eliminarAlineamiento,
};
