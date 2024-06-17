const ambitoService = require('../../services/proyects/ambito.service');

async function crearAmbito(req, res) {
    try {
        const ambito = await ambitoService.crearAmbito(req.body);
        res.status(201).json(ambito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAmbito(req, res) {
    try {
        const ambito = await ambitoService.obtenerAmbito();
        res.status(200).json(ambito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAmbitoPorId(req, res) {
    const { id } = req.params;
    try {
        const ambito = await ambitoService.obtenerAmbitoPorId(id);
        if (!ambito) {
            return res.status(404).json({ error: 'Ambito no encontrado' });
        }
        res.status(200).json(ambito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAmbito(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const ambito = await ambitoService.actualizarAmbito(id, newData);
        if (!ambito) {
            return res.status(404).json({ error: 'Ambito no encontrado' });
        }
        res.status(200).json(ambito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAmbito(req, res) {
    const { id } = req.params;
    try {
        await ambitoService.eliminarAmbito(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAmbito,
    obtenerAmbito,
    obtenerAmbitoPorId,
    actualizarAmbito,
    eliminarAmbito,
};
