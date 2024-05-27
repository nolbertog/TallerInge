
const Evidencia = require('../db/models/evidencia');

async function crearEvidencia(evidenciaData) {
    try {
        const evidencia = await Evidencia.create(evidenciaData);
        return evidencia;
    } catch (error) {
        throw new Error('Error al crear la Evidencia');
    }
}

async function obtenerEvidencia() {
    try {
        const evidencia = await Evidencia.findAll();
        return evidencia;
    } catch (error) {
        throw new Error('Error al obtener la Evidencia');
    }
}

async function obtenerEvidenciaPorId(id) {
    try {
        const evidencia = await Evidencia.findByPk(id);
        if (!evidencia) {
            throw new Error('Evidencia no encontrada');
        }
        return evidencia;
    } catch (error) {
        throw new Error('Error al obtener la Evidencia por ID');
    }
}

async function actualizarEvidencia(id, newData) {
    try {
        const [updated] = await Evidencia.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Evidencia no encontrado');
        }
        const evidencia = await Evidencia.findByPk(id);
        return evidencia;
    } catch (error) {
        throw new Error('Error al actualizar la Evidencia');
    }
}

async function eliminarEvidencia(id) {
    try {
        const deleted = await Evidencia.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Evidencia no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar la Evidencia');
    }
}



module.exports = {
    crearEvidencia,
    obtenerEvidencia,
    obtenerEvidenciaPorId,
    actualizarEvidencia,
    eliminarEvidencia,
};
