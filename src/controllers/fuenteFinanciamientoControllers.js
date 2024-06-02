const fuenteFinanciamientoServices = require('../service/fuenteFinanciamientoServices');

async function crearFuenteFinanciamiento(req, res) {
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(fuenteFinanciamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerFuenteFinanciamiento(req, res) {
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.obtenerRecursosComprometidos();
        return res.status(200).json(fuenteFinanciamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerFuenteFinanciamientoPorId(req, res) {
    const { id } = req.params;
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(fuenteFinanciamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarFuenteFinanciamiento(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(fuenteFinanciamiento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarFuenteFinanciamiento(req, res) {
    const { id } = req.params;
    try {
        await fuenteFinanciamientoServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearFuenteFinanciamiento,
    obtenerFuenteFinanciamiento,
    obtenerFuenteFinanciamientoPorId,
    actualizarFuenteFinanciamiento,
    eliminarFuenteFinanciamiento,
};
