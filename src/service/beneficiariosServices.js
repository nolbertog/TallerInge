const Beneficiarios = require('../db/models/beneficiarios');

async function crearBeneficiarios(beneficiariosData) {
    try {
        const beneficiarios = await Beneficiarios.create(beneficiariosData);
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al crear los beneficiarios');
    }
}

async function obtenerBeneficiarios() {
    try {
        const beneficiarios = await Beneficiarios.findAll();
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al obtener los beneficiarios');
    }
}

async function obtenerBeneficiariosPorId(id) {
    try {
        const beneficiarios = await Beneficiarios.findByPk(id);
        if (!beneficiarios) {
            throw new Error('Beneficiarios no encontrados');
        }
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al obtener los beneficiarios por ID');
    }
}

async function actualizarBeneficiarios(id, newData) {
    try {
        const [updated] = await Beneficiarios.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Beneficiarios no encontrados');
        }
        const beneficiarios = await Beneficiarios.findByPk(id);
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al actualizar los beneficiarios');
    }
}

async function eliminarBeneficiarios(id) {
    try {
        const deleted = await Beneficiarios.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Beneficiarios no encontrados');
        }
    } catch (error) {
        throw new Error('Error al eliminar los beneficiarios');
    }
}

module.exports = {
    crearBeneficiarios,
    obtenerBeneficiarios,
    obtenerBeneficiariosPorId,
    actualizarBeneficiarios,
    eliminarBeneficiarios,
};
