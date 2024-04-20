
const Riesgo = require('../db/models/riesgo');

async function crearRiesgo(riesgoData) {
    try {
        const riesgo = await Riesgo.create(riesgoData);
        return riesgo;
    } catch (error) {
        throw new Error('Error al crear el riesgo');
    }
}

async function obtenerRiesgo() {
    try {
        const riesgo = await Riesgo.findAll();
        return riesgo;
    } catch (error) {
        throw new Error('Error al obtener el riesgo');
    }
}

async function obtenerRiesgoPorId(id) {
    try {
        const riesgo = await Riesgo.findByPk(id);
        if (!riesgo) {
            throw new Error('riesgo no encontrada');
        }
        return riesgo;
    } catch (error) {
        throw new Error('Error al obtener la riesgo por ID');
    }
}

async function actualizarRiesgo(id, newData) {
    try {
        const [updated] = await Riesgo.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('riesgo no encontrada');
        }
        const riesgo = await Riesgo.findByPk(id);
        return riesgo;
    } catch (error) {
        throw new Error('Error al actualizar la riesgo');
    }
}

async function eliminarRiesgo(id) {
    try {
        const deleted = await Riesgo.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('riesgo no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la riesgo');
    }
}



module.exports = {
    crearRiesgo,
    obtenerRiesgo,
    obtenerRiesgoPorId,
    actualizarRiesgo,
    eliminarRiesgo,
};
