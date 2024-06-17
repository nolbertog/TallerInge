const recursosComprometidosService = require('../../services/proyects/recursoComprometido.service');

// Error handling middleware
function handleError(res, error) {
    return res.status(500).json({ error: error.message });
}

async function crearRecursosComprometidos(req, res) {
    try {
        const { body } = req;
        const recursosComprometidos = await recursosComprometidosService.crearRecursosComprometidos(body);
        return res.status(201).json(recursosComprometidos);
    } catch (error) {
        return handleError(res, error);
    }
}

async function obtenerRecursosComprometidos(req, res) {
    try {
        const recursosComprometidos = await recursosComprometidosService.obtenerRecursosComprometidos();
        return res.status(200).json(recursosComprometidos);
    } catch (error) {
        return handleError(res, error);
    }
}

async function obtenerRecursosComprometidosPorId(req, res) {
    try {
        const { id } = req.params;
        const recursosComprometidos = await recursosComprometidosService.obtenerRecursosComprometidosPorId(id);
        if (!recursosComprometidos) {
            return res.status(404).json({ error: 'Recursos comprometidos not found' });
        }
        return res.status(200).json(recursosComprometidos);
    } catch (error) {
        return handleError(res, error);
    }
}

async function actualizarRecursosComprometidos(req, res) {
    try {
        const { id } = req.params;
        const { body: newData } = req;
        const recursosComprometidos = await recursosComprometidosService.actualizarRecursosComprometidos(id, newData);
        if (!recursosComprometidos) {
            return res.status(404).json({ error: 'Recursos comprometidos not found' });
        }
        return res.status(200).json(recursosComprometidos);
    } catch (error) {
        return handleError(res, error);
    }
}

async function eliminarRecursosComprometidos(req, res) {
    try {
        const { id } = req.params;
        const recursosComprometidos = await recursosComprometidosService.eliminarRecursosComprometidos(id);
        if (!recursosComprometidos) {
            return res.status(404).json({ error: 'Recursos comprometidos not found' });
        }
        return res.status(204).send();
    } catch (error) {
        return handleError(res, error);
    }
}

module.exports = {
    crearRecursosComprometidos,
    obtenerRecursosComprometidos,
    obtenerRecursosComprometidosPorId,
    actualizarRecursosComprometidos,
    eliminarRecursosComprometidos,
};
