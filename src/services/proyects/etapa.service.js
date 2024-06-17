const Etapa = require('../../db/models/proyects/etapa');

async function crearEtapa(etapaData) {
    try {
        const etapa = await Etapa.create(etapaData);
        return etapa;
    } catch (error) {
        throw new Error('Error al crear la etapa');
    }
}

async function obtenerEtapa() {
    try {
        const etapa = await Etapa.findAll();
        return etapa;
    } catch (error) {
        throw new Error('Error al obtener la etapa');
    }
}

async function obtenerEtapaPorId(id) {
    try {
        const etapa = await Etapa.findByPk(id);
        if (!etapa) {
            throw new Error('Etapa no encontrada');
        }
        return etapa;
    } catch (error) {
        throw new Error('Error al obtener la etapa por ID');
    }
}

async function actualizarEtapa(id, newData) {
    try {
        const [updated] = await Etapa.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Etapa no encontrada');
        }
        const etapa = await Etapa.findByPk(id);
        return etapa;
    } catch (error) {
        throw new Error('Error al actualizar la etapa');
    }
}

async function eliminarEtapa(id) {
    try {
        const deleted = await Etapa.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Etapa no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la etapa');
    }
}

module.exports = {
    crearEtapa,
    obtenerEtapa,
    obtenerEtapaPorId,
    actualizarEtapa,
    eliminarEtapa,
};
