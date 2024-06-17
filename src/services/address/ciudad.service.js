const Ciudad = require('../../db/models/address/ciudad');

async function crearCiudad(ciudadData) {
    try {
        const ciudad = await Ciudad.create(ciudadData);
        return ciudad;
    } catch (error) {
        throw new Error('Error al crear la ciudad');
    }
}

async function obtenerCiudad() {
    try {
        const ciudad = await Ciudad.findAll();
        return ciudad;
    } catch (error) {
        throw new Error('Error al obtener la ciudad');
    }
}

async function obtenerCiudadPorId(id) {
    try {
        const ciudad = await Ciudad.findByPk(id);
        if (!ciudad) {
            throw new Error('Ciudad no encontrada');
        }
        return ciudad;
    } catch (error) {
        throw new Error('Error al obtener la ciudad por ID');
    }
}

async function actualizarCiudad(id, newData) {
    try {
        const [updated] = await Ciudad.update(newData, {
            where: { id },
        });
        if (updated === 0) {
            throw new Error('Ciudad no encontrada');
        }
        const ciudad = await Ciudad.findByPk(id);
        return ciudad;
    } catch (error) {
        throw new Error('Error al actualizar la ciudad');
    }
}

async function eliminarCiudad(id) {
    try {
        const deleted = await Ciudad.destroy({ where: { id } });
        if (deleted === 0) {
            throw new Error('Ciudad no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la ciudad');
    }
}

module.exports = {
    crearCiudad,
    obtenerCiudad,
    obtenerCiudadPorId,
    actualizarCiudad,
    eliminarCiudad,
};
