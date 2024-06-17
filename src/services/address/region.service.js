const Region = require('../../db/models/address/region');

async function crearRegion(regionData) {
    try {
        const region = await Region.create(regionData);
        return region;
    } catch (error) {
        throw new Error('Error al crear la región');
    }
}

async function obtenerRegion() {
    try {
        const region = await Region.findAll();
        return region;
    } catch (error) {
        throw new Error('Error al obtener la región');
    }
}

async function obtenerRegionPorId(id) {
    try {
        const region = await Region.findByPk(id);
        if (!region) {
            throw new Error('Región no encontrada');
        }
        return region;
    } catch (error) {
        throw new Error('Error al obtener la región por ID');
    }
}

async function actualizarRegion(id, newData) {
    try {
        const [updated] = await Region.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Región no encontrada');
        }
        const region = await Region.findByPk(id);
        return region;
    } catch (error) {
        throw new Error('Error al actualizar la región');
    }
}

async function eliminarRegion(id) {
    try {
        const deleted = await Region.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Región no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la región');
    }
}

module.exports = {
    crearRegion,
    obtenerRegion,
    obtenerRegionPorId,
    actualizarRegion,
    eliminarRegion,
};
