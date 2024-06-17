const rolService = require('../../services/users/rolServices');

async function crearRol(req, res) {
    try {
        const rol = await rolService.crearRol(req.body);
        res.status(201).json(rol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRol(req, res) {
    try {
        const rol = await rolService.obtenerRol();
        res.status(200).json(rol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerRolPorId(req, res) {
    const { id } = req.params;
    try {
        const rol = await rolService.obtenerRolPorId(id);
        if (!rol) {
            res.status(404).json({ error: 'Rol not found' });
        } else {
            res.status(200).json(rol);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarRol(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const rol = await rolService.actualizarRol(id, newData);
        if (!rol) {
            res.status(404).json({ error: 'Rol not found' });
        } else {
            res.status(200).json(rol);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarRol(req, res) {
    const { id } = req.params;
    try {
        const deletedCount = await rolService.eliminarRol(id);
        if (deletedCount === 0) {
            res.status(404).json({ error: 'Rol not found' });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearRol,
    obtenerRol,
    obtenerRolPorId,
    actualizarRol,
    eliminarRol,
};
