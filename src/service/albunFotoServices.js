const AlbunFoto = require('../db/models/albunFoto');

async function crearAlbunFoto(albunFotoData) {
    try {
        const albunFoto = await AlbunFoto.create(albunFotoData);
        return albunFoto;
    } catch (error) {
        throw new Error('Error al crear el álbum de fotos');
    }
}

async function obtenerAlbunFoto() {
    try {
        const albunFoto = await AlbunFoto.findAll();
        return albunFoto;
    } catch (error) {
        throw new Error('Error al obtener el álbum de fotos');
    }
}

async function obtenerAlbunFotoPorId(id) {
    try {
        const albunFoto = await AlbunFoto.findByPk(id);
        if (!albunFoto) {
            throw new Error('Álbum de fotos no encontrado');
        }
        return albunFoto;
    } catch (error) {
        throw new Error('Error al obtener el álbum de fotos por ID');
    }
}

async function actualizarAlbunFoto(id, newData) {
    try {
        const [updated] = await AlbunFoto.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Álbum de fotos no encontrado');
        }
        const albunFoto = await AlbunFoto.findByPk(id);
        return albunFoto;
    } catch (error) {
        throw new Error('Error al actualizar el álbum de fotos');
    }
}

async function eliminarAlbunFoto(id) {
    try {
        const deleted = await AlbunFoto.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Álbum de fotos no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el álbum de fotos');
    }
}

module.exports = {
    crearAlbunFoto,
    obtenerAlbunFoto,
    obtenerAlbunFotoPorId,
    actualizarAlbunFoto,
    eliminarAlbunFoto,
};
