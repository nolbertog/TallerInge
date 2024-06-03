const Alcance = require('../db/models/alcance');

async function crearAlcance(alcanceData) {
    try {
        const alcance = await Alcance.create(alcanceData);
        return alcance;
    } catch (error) {
        throw new Error('Error al crear el alcance');
    }
}

async function obtenerAlcance() {
    try {
        const alcance = await Alcance.findAll();
        return alcance;
    } catch (error) {
        throw new Error('Error al obtener el alcance');
    }
}

async function obtenerAlcancePorId(id) {
    try {
        const alcance = await Alcance.findByPk(id);
        if (!alcance) {
            throw new Error('Alcance no encontrada');
        }
        return alcance;
    } catch (error) {
        throw new Error('Error al obtener el alcance por ID');
    }
}

async function actualizarAlcance(id, newData) {
    try {
        const [updated] = await Alcance.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Alcance no encontrada');
        }
        const alcance = await Alcance.findByPk(id);
        return alcance;
    } catch (error) {
        throw new Error('Error al actualizar el alcance');
    }
}

async function eliminarAlcance(id) {
    try {
        const deleted = await Alcance.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alcance no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar el alcance');
    }
}

module.exports = {
    crearAlcance,
    obtenerAlcance,
    obtenerAlcancePorId,
    actualizarAlcance,
    eliminarAlcance,
};
