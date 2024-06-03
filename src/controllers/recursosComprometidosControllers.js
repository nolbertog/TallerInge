const recursosComprometidosService = require('../service/recursosComprometidosServices');

async function crearRecursosComprometidos(req, res) {
    try {
        const recursosComprometidos = await recursosComprometidosService.crearRecursosComprometidos(req.body);
        return res.status(201).json(recursosComprometidos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRecursosComprometidos(req, res) {
    try {
        const recursosComprometidos = await recursosComprometidosService.obtenerRecursosComprometidos();
        return res.status(200).json(recursosComprometidos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerRecursosComprometidosPorId(req, res) {
    const { id } = req.params;
    try {
        const recursosComprometidos = await recursosComprometidosService.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(recursosComprometidos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarRecursosComprometidos(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const recursosComprometidos = await recursosComprometidosService.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(recursosComprometidos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarRecursosComprometidos(req, res) {
    const { id } = req.params;
    try {
        await recursosComprometidosService.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearRecursosComprometidos,
    obtenerRecursosComprometidos,
    obtenerRecursosComprometidosPorId,
    actualizarRecursosComprometidos,
    eliminarRecursosComprometidos,
};
