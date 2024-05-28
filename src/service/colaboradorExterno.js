
const ColaboradorExterno = require('../db/models/colaboradorExterno');

async function crearColaboradorExterno(colaboradorExternoData) {
    try {
        const colaboradorExterno = await ColaboradorExterno.create(colaboradorExternoData);
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al crear la Colaborador Externo');
    }
}

async function obtenerColaboradorExterno() {
    try {
        const colaboradorExterno = await ColaboradorExterno.findAll();
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al Colaborador Externo');
    }
}

async function obtenerColaboradorExternoPorId(id) {
    try {
        const colaboradorExterno = await ColaboradorExterno.findByPk(id);
        if (!colaboradorExterno) {
            throw new Error('Colaborador Externo no encontrada');
        }
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al Colaborador Externo por ID');
    }
}

async function actualizarColaboradorExterno(id, newData) {
    try {
        const [updated] = await ColaboradorExterno.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Colaborador Externo no encontrada');
        }
        const colaboradorExterno = await ColaboradorExterno.findByPk(id);
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al actualizar la albun');
    }
}

async function eliminarColaboradorExterno(id) {
    try {
        const deleted = await ColaboradorExterno.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Colaborador Externo no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar el Colaborador Externo');
    }
}



module.exports = {
    crearColaboradorExterno,
    obtenerColaboradorExterno,
    obtenerColaboradorExternoPorId,
    actualizarColaboradorExterno,
    eliminarColaboradorExterno,
};
