
const RecursosComprometidos = require('../db/models/recursosComprometidos');

async function crearRecursosComprometidos(recursosComprometidosData) {
    try {
        const recursosComprometidos = await RecursosComprometidos.create(recursosComprometidosData);
        return recursosComprometidos;
    } catch (error) {
        throw new Error('Error al crear el recurso comprometido');
    }
}

async function obtenerRecursosComprometidos() {
    try {
        const recursosComprometidos = await RecursosComprometidos.findAll();
        return recursosComprometidos;
    } catch (error) {
        throw new Error('Error al obtener los recursos comprometidos');
    }
}

async function obtenerRecursosComprometidosPorId(id) {
    try {
        const recursosComprometidos = await RecursosComprometidos.findByPk(id);
        if (!recursosComprometidos) {
            throw new Error('recursos comprometidos no encontrado');
        }
        return recursosComprometidos;
    } catch (error) {
        throw new Error('Error al obtener los recuros comprometidos por ID');
    }
}

async function actualizarRecursosComprometidos(id, newData) {
    try {
        const [updated] = await RecursosComprometidos.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Recursos comprometidos no encontrado');
        }
        const recursosComprometidos = await RecursosComprometidos.findByPk(id);
        return recursosComprometidos;
    } catch (error) {
        throw new Error('Error al actualizar los recursos comprometidos');
    }
}

async function eliminarRecursosComprometidos(id) {
    try {
        const deleted = await RecursosComprometidos.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('recurosm comprometidos no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el recurso comprometido');
    }
}



module.exports = {
    crearRecursosComprometidos,
    obtenerRecursosComprometidos,
    obtenerRecursosComprometidosPorId,
    actualizarRecursosComprometidos,
    eliminarRecursosComprometidos,
};
