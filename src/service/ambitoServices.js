
const Ambito = require('../db/models/ambito');

async function crearAmbito(ambitoData) {
    try {
        const ambito = await Ambito.create(ambitoData);
        return ambito;
    } catch (error) {
        throw new Error('Error al crear la ambito');
    }
}

async function obtenerAmbito() {
    try {
        const ambito = await Ambito.findAll();
        return ambito;
    } catch (error) {
        throw new Error('Error al obtener la ambito');
    }
}

async function obtenerAmbitoPorId(id) {
    try {
        const ambito = await Ambito.findByPk(id);
        if (!ambito) {
            throw new Error('ambito no encontrada');
        }
        return ambito;
    } catch (error) {
        throw new Error('Error al obtener la ambito por ID');
    }
}

async function actualizarAmbito(id, newData) {
    try {
        const [updated] = await Ambito.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Ambito no encontrada');
        }
        const ambito = await Ambito.findByPk(id);
        return ambito;
    } catch (error) {
        throw new Error('Error al actualizar la ambito');
    }
}

async function eliminarAmbito(id) {
    try {
        const deleted = await Ambito.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Ambito no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la ambito');
    }
}



module.exports = {
    crearAmbito,
    obtenerAmbito,
    obtenerAmbitoPorId,
    actualizarAmbito,
    eliminarAmbito,
};
