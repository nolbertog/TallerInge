const rolService = require('../service/rolServices');

async function crearRol(req, res) {
    try {
        const rol = await rolService.crearRol(req.body);
        return res.status(201).json(rol);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRol(req, res) {
    try {
        const rol = await rolService.obtenerRol();
        return res.status(200).json(rol);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRolPorId(req, res) {
    const { id } = req.params;
    try {
        const rol = await rolService.obtenerRolPorId(id);
        return res.status(200).json(rol);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarRol(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const rol = await rolService.actualizarRol(id, newData);
        return res.status(200).json(rol);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarRol(req, res) {
    const { id } = req.params;
    try {
        await rolService.eliminarRol(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearRol,
    obtenerRol,
    obtenerRolPorId,
    actualizarRol,
    eliminarRol,
};
