const Dificultad = require('../../db/models/proyects/dificultad');

async function crearDificultad(dificultadData) {
    try {
        const dificultad = await Divulgacion.create(dificultadData);
        return dificultad;
    } catch (error) {
        throw new Error('Error al crear la dificultad');
    }
}

async function obtenerDificultad() {
    try {
        const dificultad = await Dificultad.findAll();
        return dificultad;
    } catch (error) {
        throw new Error('Error al obtener la dificultad');
    }
}

async function obtenerDificultadPorId(id) {
    try {
        const dificultad = await Dificultad.findByPk(id);
        if (!dificultad) {
            throw new Error('Dificultad no encontrada');
        }
        return dificultad;
    } catch (error) {
        throw new Error('Error al obtener la dificultad por ID');
    }
}

async function actualizarDificultad(id, newData) {
    try {
        const [updated] = await Dificultad.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Dificultad no encontrada');
        }
        const dificultad = await Dificultad.findByPk(id);
        return dificultad;
    } catch (error) {
        throw new Error('Error al actualizar la dificultad');
    }
}

async function eliminarDificultad(id) {
    try {
        const deleted = await Dificultad.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Dificultad no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la dificultad');
    }
}

module.exports = {
    crearDificultad,
    obtenerDificultad,
    obtenerDificultadPorId,
    actualizarDificultad,
    eliminarDificultad,
};
