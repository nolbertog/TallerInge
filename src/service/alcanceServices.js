
const Alcance = require('../db/models/alcance');

async function crearAlcance(alcanceData) {
    try {
        const alcance = await Alcance.create(alcanceData);
        return alcance;
    } catch (error) {
        throw new Error('Error al crear la alcance');
    }
}

async function obtenerAlcance() {
    try {
        const alcance = await Alcance.findAll();
        return alcance;
    } catch (error) {
        throw new Error('Error al obtener la alcance');
    }
}

async function obtenerAlcancePorId(id) {
    try {
        const alcance = await Alcance.findByPk(id);
        if (!alcance) {
            throw new Error('alcance no encontrada');
        }
        return alcance;
    } catch (error) {
        throw new Error('Error al obtener la alcance por ID');
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
        throw new Error('Error al actualizar la alcance');
    }
}

async function eliminarAlcance(id) {
    try {
        const deleted = await Alcance.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('alcance no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la alcance');
    }
}



module.exports = {
    crearAlcance,
    obtenerAlcance,
    obtenerAlcancePorId,
    actualizarAlcance,
    eliminarAlcance,
};
