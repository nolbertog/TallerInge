const direccionService = require('../service/direccionServices');

async function crearDireccion(req, res) {
    try {
        const direccion = await direccionService.crearDireccion(req.body);
        res.status(201).json(direccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDireccion(req, res) {
    try {
        const direccion = await direccionService.obtenerDireccion();
        res.status(200).json(direccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDireccionPorId(req, res) {
    const { id } = req.params;
    try {
        const direccion = await direccionService.obtenerDireccionPorId(id);
        if (!direccion) {
            return res.status(404).json({ error: 'Direccion no encontrada' });
        }
        res.status(200).json(direccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarDireccion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const direccion = await direccionService.actualizarDireccion(id, newData);
        if (!direccion) {
            return res.status(404).json({ error: 'Direccion no encontrada' });
        }
        res.status(200).json(direccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarDireccion(req, res) {
    const { id } = req.params;
    try {
        await direccionService.eliminarDireccion(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearDireccion,
    obtenerDireccion,
    obtenerDireccionPorId,
    actualizarDireccion,
    eliminarDireccion,
};
