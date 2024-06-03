
const AlbunFoto = require('../db/models/albunFoto');

async function crearAlbunFoto(albunFotoData) {
    try {
        const albunFoto = await AlbunFoto.create(albunFotoData);
        return albunFoto;
    } catch (error) {
        throw new Error('Error al crear la albun');
    }
}

async function obtenerAlbunFoto() {
    try {
        const albunFoto = await AlbunFoto.findAll();
        return albunFoto;
    } catch (error) {
        throw new Error('Error al obtener la albun');
    }
}

async function obtenerAlbunFotoPorId(id) {
    try {
        const albunFoto = await AlbunFoto.findByPk(id);
        if (!albunFoto) {
            throw new Error('albun no encontrada');
        }
        return albunFoto;
    } catch (error) {
        throw new Error('Error al obtener la albun por ID');
    }
}

async function actualizarAlbunFoto(id, newData) {
    try {
        const [updated] = await AlbunFoto.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('albun no encontrada');
        }
        const albunFoto = await AlbunFoto.findByPk(id);
        return albunFoto;
    } catch (error) {
        throw new Error('Error al actualizar la albun');
    }
}

async function eliminarAlbunFoto(id) {
    try {
        const deleted = await AlbunFoto.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('albun no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la albun');
    }
}



module.exports = {
    crearAlbunFoto,
    obtenerAlbunFoto,
    obtenerAlbunFotoPorId,
    actualizarAlbunFoto,
    eliminarAlbunFoto,
};
