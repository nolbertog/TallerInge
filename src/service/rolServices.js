
const Rol = require('../db/models/rol');

async function crearRol(rolData) {
    try {
        const rol = await Rol.create(rolData);
        return rol;
    } catch (error) {
        throw new Error('Error al crear el rol');
    }
}

async function obtenerRol() {
    try {
        const rol = await Rol.findAll();
        return rol;
    } catch (error) {
        throw new Error('Error al obtener el rol');
    }
}

async function obtenerRolPorId(id) {
    try {
        const rol = await Rol.findByPk(id);
        if (!rol) {
            throw new Error('rol no encontrada');
        }
        return rol;
    } catch (error) {
        throw new Error('Error al obtener la rol por ID');
    }
}

async function actualizarRol(id, newData) {
    try {
        const [updated] = await Rol.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('rol no encontrada');
        }
        const rol = await Rol.findByPk(id);
        return rol;
    } catch (error) {
        throw new Error('Error al actualizar la rol');
    }
}

async function eliminarRol(id) {
    try {
        const deleted = await Rol.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('rol no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la rol');
    }
}



module.exports = {
    crearRol,
    obtenerRol,
    obtenerRolPorId,
    actualizarRol,
    eliminarRol,
};
