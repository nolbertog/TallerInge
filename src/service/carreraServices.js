
const Carrera = require('../db/models/carrera');

async function crearCarrera(carreraData) {
    try {
        const carrera = await Carrera.create(carreraData);
        return carrera;
    } catch (error) {
        throw new Error('Error al crear la carrera');
    }
}

async function obtenerCarrera() {
    try {
        const carrera = await Carrera.findAll();
        return carrera;
    } catch (error) {
        throw new Error('Error al obtener la carrera');
    }
}

async function obtenerCarreraPorId(id) {
    try {
        const carrera = await Carrera.findByPk(id);
        if (!carrera) {
            throw new Error('carrera no encontrada');
        }
        return carrera;
    } catch (error) {
        throw new Error('Error al obtener la carrera por ID');
    }
}

async function actualizarCarrera(id, newData) {
    try {
        const [updated] = await Carrera.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Carrera no encontrada');
        }
        const carrera = await Carrera.findByPk(id);
        return carrera;
    } catch (error) {
        throw new Error('Error al actualizar la carrera');
    }
}

async function eliminarCarrera(id) {
    try {
        const deleted = await Carrera.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('carrera no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la carrera');
    }
}



module.exports = {
    crearCarrera,
    obtenerCarrera,
    obtenerCarreraPorId,
    actualizarCarrera,
    eliminarCarrera,
};
