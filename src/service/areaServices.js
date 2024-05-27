
const Area = require('../db/models/area');

async function crearArea(areaData) {
    try {
        const area = await Area.create(areaData);
        return area;
    } catch (error) {
        throw new Error('Error al crear la area');
    }
}

async function obtenerArea() {
    try {
        const area = await Area.findAll();
        return area;
    } catch (error) {
        throw new Error('Error al obtener la area');
    }
}

async function obtenerAreaPorId(id) {
    try {
        const area = await Area.findByPk(id);
        if (!area) {
            throw new Error('area no encontrada');
        }
        return area;
    } catch (error) {
        throw new Error('Error al obtener la area por ID');
    }
}

async function actualizarArea(id, newData) {
    try {
        const [updated] = await Area.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Area no encontrada');
        }
        const area = await Area.findByPk(id);
        return area;
    } catch (error) {
        throw new Error('Error al actualizar la area');
    }
}

async function eliminarArea(id) {
    try {
        const deleted = await Area.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('area no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la area');
    }
}



module.exports = {
    crearArea,
    obtenerArea,
    obtenerAreaPorId,
    actualizarArea,
    eliminarArea,
};
