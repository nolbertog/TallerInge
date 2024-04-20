
const Sede = require('../db/models/sede');

async function crearSede(sedeData) {
    try {
        const usuario = await Sede.create(sedeData);
        return usuario;
    } catch (error) {
        throw new Error('Error al crear la sede');
    }
}

async function obtenerSede() {
    try {
        const sede = await Sede.findAll();
        return sede;
    } catch (error) {
        throw new Error('Error al obtener la sede');
    }
}

async function obtenerSedePorId(id) {
    try {
        const sede = await Sede.findByPk(id);
        if (!sede) {
            throw new Error('sede no encontrada');
        }
        return sede;
    } catch (error) {
        throw new Error('Error al ontener la sede por ID');
    }
}

async function actualizarSede(id, newData) {
    try {
        const [updated] = await Sede.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('sede no encontrada');
        }
        const sede = await Sede.findByPk(id);
        return sede;
    } catch (error) {
        throw new Error('Error al actualizar la sede');
    }
}

async function eliminarSede(id) {
    try {
        const deleted = await Sede.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('sede no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la sede');
    }
}



module.exports = {
    crearSede,
    obtenerSede,
    obtenerSedePorId,
    actualizarSede,
    eliminarSede,
};
