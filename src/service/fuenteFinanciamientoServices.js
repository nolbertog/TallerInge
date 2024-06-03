const FuenteFinanciamiento = require('../db/models/fuenteFinanciamiento');

async function crearFuenteFinanciamiento(fuenteFinanciamientoData) {
    try {
        const fuenteFinanciamiento = await FuenteFinanciamiento.create(fuenteFinanciamientoData);
        return fuenteFinanciamiento;
    } catch (error) {
        throw new Error('Error al crear la Fuente Financiamiento');
    }
}

async function obtenerFuenteFinanciamiento() {
    try {
        const fuenteFinanciamiento = await FuenteFinanciamiento.findAll();
        return fuenteFinanciamiento;
    } catch (error) {
        throw new Error('Error al obtener la Fuente Financiamiento');
    }
}

async function obtenerFuenteFinanciamientoPorId(id) {
    try {
        const fuenteFinanciamiento = await FuenteFinanciamiento.findByPk(id);
        if (!fuenteFinanciamiento) {
            throw new Error('Fuente Financiamiento no encontrada');
        }
        return fuenteFinanciamiento;
    } catch (error) {
        throw new Error('Error al obtener la Fuente Financiamiento por ID');
    }
}

async function actualizarFuenteFinanciamiento(id, newData) {
    try {
        const [updated] = await FuenteFinanciamiento.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Fuente Financiamiento no encontrada');
        }
        const fuenteFinanciamiento = await FuenteFinanciamiento.findByPk(id);
        return fuenteFinanciamiento;
    } catch (error) {
        throw new Error('Error al actualizar la Fuente Financiamiento');
    }
}

async function eliminarFuenteFinanciamiento(id) {
    try {
        const deleted = await FuenteFinanciamiento.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Fuente Financiamiento no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la Fuente Financiamiento');
    }
}

module.exports = {
    crearFuenteFinanciamiento,
    obtenerFuenteFinanciamiento,
    obtenerFuenteFinanciamientoPorId,
    actualizarFuenteFinanciamiento,
    eliminarFuenteFinanciamiento,
};
