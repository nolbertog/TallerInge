const ActividadesComprometidas = require('../../db/models/proyects/actividadComprometida');

async function crearActividadesComprometidas(actividadesComprometidasData) {
    try {
        const actividadesComprometidas = await ActividadesComprometidas.create(actividadesComprometidasData);
        return actividadesComprometidas;
    } catch (error) {
        throw new Error('Error al crear las actividades comprometidas');
    }
}

async function obtenerActividadesComprometidas() {
    try {
        const actividadesComprometidas = await ActividadesComprometidas.findAll();
        return actividadesComprometidas;
    } catch (error) {
        throw new Error('Error al obtener las actividades comprometidas');
    }
}

async function obtenerActividadesComprometidaPorId(id) {
    try {
        const actividadesComprometidas = await ActividadesComprometidas.findByPk(id);
        if (!actividadesComprometidas) {
            throw new Error('Actividades comprometidas no encontrada');
        }
        return actividadesComprometidas;
    } catch (error) {
        throw new Error('Error al obtener la actividad por ID');
    }
}

async function actualizarActividadesComprometida(id, newData) {
    try {
        const [updated] = await ActividadesComprometidas.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Actividad no encontrada');
        }
        const actividadesComprometidas = await ActividadesComprometidas.findByPk(id);
        return actividadesComprometidas;
    } catch (error) {
        throw new Error('Error al actualizar la actividad');
    }
}

async function eliminarActividadesComprometida(id) {
    try {
        const deleted = await ActividadesComprometidas.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Actividad no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la actividad');
    }
}

module.exports = {
    crearActividadesComprometidas,
    obtenerActividadesComprometidas,
    obtenerActividadesComprometidaPorId,
    actualizarActividadesComprometida,
    eliminarActividadesComprometida,
};
