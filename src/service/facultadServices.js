
const Facultad = require('../db/models/facultad');

async function crearFacultad(facultadData) {
    try {
        const facultad = await Facultad.create(facultadData);
        return facultad;
    } catch (error) {
        throw new Error('Error al crear la Facultad');
    }
}

async function obtenerFacultad() {
    try {
        const facultad = await Facultad.findAll();
        return facultad;
    } catch (error) {
        throw new Error('Error al obtener la Facultad');
    }
}

async function obtenerFacultadPorId(id) {
    try {
        const facultad = await Facultad.findByPk(id);
        if (!facultad) {
            throw new Error('Facultad no encontrada');
        }
        return facultad;
    } catch (error) {
        throw new Error('Error al obtener la Facultad por ID');
    }
}

async function actualizarFacultad(id, newData) {
    try {
        const [updated] = await Facultad.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Facultad no encontrado');
        }
        const facultad = await Facultad.findByPk(id);
        return facultad;
    } catch (error) {
        throw new Error('Error al actualizar la Facultad');
    }
}

async function eliminarFacultad(id) {
    try {
        const deleted = await Facultad.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Facultad no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar la Facultad');
    }
}



module.exports = {
    crearFacultad,
    obtenerFacultad,
    obtenerFacultadPorId,
    actualizarFacultad,
    eliminarFacultad ,
};
