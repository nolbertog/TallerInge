const ColaboradorExternoService = require('../../db/models/users/colaboradorExterno');

async function crearColaboradorExterno(colaboradorExternoData) {
    try {
        const colaboradorExterno = await ColaboradorExternoService.create(colaboradorExternoData);
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al crear el Colaborador Externo');
    }
}

async function obtenerColaboradorExterno() {
    try {
        const colaboradorExterno = await ColaboradorExternoService.findAll();
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al obtener el Colaborador Externo');
    }
}

async function obtenerColaboradorExternoPorId(id) {
    try {
        const colaboradorExterno = await ColaboradorExternoService.findByPk(id);
        if (!colaboradorExterno) {
            throw new Error('Colaborador Externo no encontrado');
        }
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al obtener el Colaborador Externo por ID');
    }
}

async function actualizarColaboradorExterno(id, newData) {
    try {
        const [updated] = await ColaboradorExternoService.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Colaborador Externo no encontrado');
        }
        const colaboradorExterno = await ColaboradorExternoService.findByPk(id);
        return colaboradorExterno;
    } catch (error) {
        throw new Error('Error al actualizar el Colaborador Externo');
    }
}

async function eliminarColaboradorExterno(id) {
    try {
        const deleted = await ColaboradorExternoService.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Colaborador Externo no encontrado');
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
