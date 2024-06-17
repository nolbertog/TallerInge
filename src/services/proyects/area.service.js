const Area = require('../../db/models/proyects/area');

async function crearArea(areaData) {
    try {
        const area = await Area.create(areaData);
        return area;
    } catch (error) {
        throw new Error('Error al crear el área');
    }
}

async function obtenerArea() {
    try {
        const area = await Area.findAll();
        return area;
    } catch (error) {
        throw new Error('Error al obtener el área');
    }
}

async function obtenerAreaPorId(id) {
    try {
        const area = await Area.findByPk(id);
        if (!area) {
            throw new Error('Área no encontrada');
        }
        return area;
    } catch (error) {
        throw new Error('Error al obtener el área por ID');
    }
}

async function actualizarArea(id, newData) {
    try {
        const [updated] = await Area.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Área no encontrada');
        }
        const area = await Area.findByPk(id);
        return area;
    } catch (error) {
        throw new Error('Error al actualizar el área');
    }
}

async function eliminarArea(id) {
    try {
        const deleted = await Area.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Área no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar el área');
    }
}

module.exports = {
    crearArea,
    obtenerArea,
    obtenerAreaPorId,
    actualizarArea,
    eliminarArea,
};
