const ambitoService = require('../service/ambitoServices');

async function crearAmbito(req, res) {
    try {
        const ambito = await ambitoService.crearAmbito(req.body);
        return res.status(201).json(ambito);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAmbito(req, res) {
    try {
        const ambito = await ambitoService.obtenerAmbito();
        return res.status(200).json(ambito);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAmbitoPorId(req, res) {
    const { id } = req.params;
    try {
        const ambito = await ambitoService.obtenerAmbitoPorId(id);
        return res.status(200).json(ambito);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAmbito(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const ambito = await regionService.actualizarAmbito(id, newData);
        return res.status(200).json(ambito);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAmbito(req, res) {
    const { id } = req.params;
    try {
        await ambitoService.eliminarAmbito(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearAmbito,
    obtenerAmbito,
    obtenerAmbitoPorId,
    actualizarAmbito,
    eliminarAmbito,
};
