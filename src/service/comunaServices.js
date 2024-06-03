const Comuna = require('../db/models/comuna');

async function crearComuna(comunaData) {
    try {
        const comuna = await Comuna.create(comunaData);
        return comuna;
    } catch (error) {
        throw new Error('Error al crear la comuna');
    }
}

async function obtenerComuna() {
    try {
        const comuna = await Comuna.findAll();
        return comuna;
    } catch (error) {
        throw new Error('Error al obtener la comuna');
    }
}

async function obtenerComunaPorId(id) {
    try {
        const comuna = await Comuna.findByPk(id);
        if (!comuna) {
            throw new Error('Comuna no encontrada');
        }
        return comuna;
    } catch (error) {
        throw new Error('Error al obtener la comuna por ID');
    }
}

async function actualizarComuna(id, newData) {
    try {
        const [updated] = await Comuna.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Comuna no encontrada');
        }
        const comuna = await Comuna.findByPk(id);
        return comuna;
    } catch (error) {
        throw new Error('Error al actualizar la comuna');
    }
}

async function eliminarComuna(id) {
    try {
        const deleted = await Comuna.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Comuna no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la comuna');
    }
}

module.exports = {
    crearComuna,
    obtenerComuna,
    obtenerComunaPorId,
    actualizarComuna,
    eliminarComuna,
};
