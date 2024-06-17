const Ambito = require('../../db/models/proyects/ambito');

async function crearAmbito(ambitoData) {
    try {
        const ambito = await Ambito.create(ambitoData);
        return ambito;
    } catch (error) {
        throw new Error('Error al crear el ámbito');
    }
}

async function obtenerAmbito() {
    try {
        const ambito = await Ambito.findAll();
        return ambito;
    } catch (error) {
        throw new Error('Error al obtener el ámbito');
    }
}

async function obtenerAmbitoPorId(id) {
    try {
        const ambito = await Ambito.findByPk(id);
        if (!ambito) {
            throw new Error('Ámbito no encontrado');
        }
        return ambito;
    } catch (error) {
        throw new Error('Error al obtener el ámbito por ID');
    }
}

async function actualizarAmbito(id, newData) {
    try {
        const [updated] = await Ambito.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Ámbito no encontrado');
        }
        const ambito = await Ambito.findByPk(id);
        return ambito;
    } catch (error) {
        throw new Error('Error al actualizar el ámbito');
    }
}

async function eliminarAmbito(id) {
    try {
        const deleted = await Ambito.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Ámbito no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el ámbito');
    }
}

module.exports = {
    crearAmbito,
    obtenerAmbito,
    obtenerAmbitoPorId,
    actualizarAmbito,
    eliminarAmbito,
};
