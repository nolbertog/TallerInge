
const Beneficiarios = require('../db/models/beneficiarios');

async function crearBeneficiarios(beneficiariosData) {
    try {
        const beneficiarios = await Beneficiarios.create(beneficiariosData);
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al crear la beneficiarios');
    }
}

async function obtenerBeneficiarios() {
    try {
        const beneficiarios = await Beneficiarios.findAll();
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al obtener la beneficiarios');
    }
}

async function obtenerBeneficiariosPorId(id) {
    try {
        const beneficiarios = await Beneficiarios.findByPk(id);
        if (!beneficiarios) {
            throw new Error('beneficiarios no encontrada');
        }
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al obtener la beneficiarios por ID');
    }
}

async function actualizarBeneficiarios(id, newData) {
    try {
        const [updated] = await Beneficiarios.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Beneficiarios no encontrada');
        }
        const beneficiarios = await Beneficiarios.findByPk(id);
        return beneficiarios;
    } catch (error) {
        throw new Error('Error al actualizar la beneficiarios');
    }
}

async function eliminarBeneficiarios(id) {
    try {
        const deleted = await Beneficiarios.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('beneficiarios no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la beneficiarios');
    }
}



module.exports = {
    crearBeneficiarios,
    obtenerBeneficiarios,
    obtenerBeneficiariosPorId,
    actualizarBeneficiarios,
    eliminarBeneficiarios,
};
