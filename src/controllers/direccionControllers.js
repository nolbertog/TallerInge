const direccionService = require('../service/direccionServices');

async function crearDireccion(req, res) {
    try {
        const direccion = await direccionService.crearDireccion(req.body);
        return res.status(201).json(direccion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDireccion(req, res) {
    try {
        const direccion = await direccionService.obtenerDireccion();
        return res.status(200).json(direccion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDireccionPorId(req, res) {
    const { id } = req.params;
    try {
        const direccion = await direccionService.obtenerDireccionPorId(id);
        return res.status(200).json(direccion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarDireccion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const direccion = await direccionService.actualizarDireccion(id, newData);
        return res.status(200).json(direccion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarDireccion(req, res) {
    const { id } = req.params;
    try {
        await direccionService.eliminarDireccion(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearDireccion,
    obtenerDireccion,
    obtenerDireccionPorId,
    actualizarDireccion,
    eliminarDireccion,
};
