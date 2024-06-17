const beneficiariosService = require('../../services/users/beneficiariosServices');

async function handleErrors(res, error) {
    return res.status(500).json({ error: error.message });
}

async function crearBeneficiarios(req, res) {
    try {
        const beneficiarios = await beneficiariosService.crearBeneficiarios(req.body);
        return res.status(201).json(beneficiarios);
    } catch (error) {
        return handleErrors(res, error);
    }
}

async function obtenerBeneficiarios(req, res) {
    try {
        const beneficiarios = await beneficiariosService.obtenerBeneficiarios();
        return res.status(200).json(beneficiarios);
    } catch (error) {
        return handleErrors(res, error);
    }
}

async function obtenerBeneficiariosPorId(req, res) {
    const { id } = req.params;
    try {
        const beneficiarios = await beneficiariosService.obtenerBeneficiariosPorId(id);
        return res.status(200).json(beneficiarios);
    } catch (error) {
        return handleErrors(res, error);
    }
}

async function actualizarBeneficiarios(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const beneficiarios = await beneficiariosService.actualizarBeneficiarios(id, newData);
        return res.status(200).json(beneficiarios);
    } catch (error) {
        return handleErrors(res, error);
    }
}

async function eliminarBeneficiarios(req, res) {
    const { id } = req.params;
    try {
        await beneficiariosService.eliminarBeneficiarios(id);
        return res.status(204).send();
    } catch (error) {
        return handleErrors(res, error);
    }
}

module.exports = {
    crearBeneficiarios,
    obtenerBeneficiarios,
    obtenerBeneficiariosPorId,
    actualizarBeneficiarios,
    eliminarBeneficiarios,
};
