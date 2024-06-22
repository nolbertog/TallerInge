const fuenteFinanciamientoServices = require('../../services/proyects/fuenteFinanciamiento.service');

async function crearFuenteFinanciamiento(req, res) {
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.crearFuenteFinanciamiento(req.body);
        res.status(201).json(fuenteFinanciamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerFuenteFinanciamiento(req, res) {
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.obtenerFuenteFinanciamiento();
        res.status(200).json(fuenteFinanciamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerFuenteFinanciamientoPorId(req, res) {
    const { id } = req.params;
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.obtenerFuenteFinanciamientoPorId(id);
        if (!fuenteFinanciamiento) {
            return res.status(404).json({ error: 'Fuente de financiamiento no encontrada' });
        }
        res.status(200).json(fuenteFinanciamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarFuenteFinanciamiento(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.actualizarFuenteFinanciamiento(id, newData);
        if (!fuenteFinanciamiento) {
            return res.status(404).json({ error: 'Fuente de financiamiento no encontrada' });
        }
        res.status(200).json(fuenteFinanciamiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarFuenteFinanciamiento(req, res) {
    const { id } = req.params;
    try {
        const fuenteFinanciamiento = await fuenteFinanciamientoServices.eliminarFuenteFinanciamiento(id);
        if (!fuenteFinanciamiento) {
            return res.status(404).json({ error: 'Fuente de financiamiento no encontrada' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearFuenteFinanciamiento,
    obtenerFuenteFinanciamiento,
    obtenerFuenteFinanciamientoPorId,
    actualizarFuenteFinanciamiento,
    eliminarFuenteFinanciamiento,
};
