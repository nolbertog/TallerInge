const dificultadService = require('../service/dificultadServices');

async function crearDificultad(req, res) {
    try {
        const dificultad = await dificultadService.crearDificultad(req.body);
        res.status(201).json(dificultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDificultad(req, res) {
    try {
        const dificultad = await dificultadService.obtenerDificultad();
        res.status(200).json(dificultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDificultadPorId(req, res) {
    const { id } = req.params;
    try {
        const dificultad = await dificultadService.obtenerDificultadPorId(id);
        if (!dificultad) {
            return res.status(404).json({ error: 'Dificultad not found' });
        }
        res.status(200).json(dificultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarDificultad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const dificultad = await dificultadService.actualizarDificultad(id, newData);
        if (!dificultad) {
            return res.status(404).json({ error: 'Dificultad not found' });
        }
        res.status(200).json(dificultad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarDificultad(req, res) {
    const { id } = req.params;
    try {
        const deletedCount = await dificultadService.eliminarDificultad(id);
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Dificultad not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearDificultad,
    obtenerDificultad,
    obtenerDificultadPorId,
    actualizarDificultad,
    eliminarDificultad,
};
