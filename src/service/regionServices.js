
const Region = require('../db/models/region');

async function crearRegion(regionData) {
    try {
        const region = await Region.create(regionData);
        return region;
    } catch (error) {
        throw new Error('Error al crear la region');
    }
}

async function obtenerRegion() {
    try {
        const region = await Region.findAll();
        return region;
    } catch (error) {
        throw new Error('Error al obtener la region');
    }
}

async function obtenerRegionPorId(id) {
    try {
        const region = await Region.findByPk(id);
        if (!region) {
            throw new Error('region no encontrada');
        }
        return region;
    } catch (error) {
        throw new Error('Error al obtener la region por ID');
    }
}

async function actualizarRegion(id, newData) {
    try {
        const [updated] = await Region.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('region no encontrada');
        }
        const region = await Region.findByPk(id);
        return region;
    } catch (error) {
        throw new Error('Error al actualizar la region');
    }
}

async function eliminarRegion(id) {
    try {
        const deleted = await Region.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('region no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la region');
    }
}



module.exports = {
    crearRegion,
    obtenerRegion,
    obtenerRegionPorId,
    actualizarRegion,
    eliminarRegion ,
};
