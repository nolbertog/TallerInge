const dificultadService = require('../service/dificultadServices');

async function crearDificultad(req, res) {
    try {
        const dificultad = await dificultadService.crearDificultad(req.body);
        return res.status(201).json(dificultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDificultad(req, res) {
    try {
        const dificultad = await dificultadService.obtenerDificultad();
        return res.status(200).json(dificultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDificultadPorId(req, res) {
    const { id } = req.params;
    try {
        const dificultad = await dificultadService.obtenerDificultadPorId(id);
        return res.status(200).json(dificultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarDificultad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const dificultad = await dificultadService.actualizarDificultad(id, newData);
        return res.status(200).json(dificultad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarDificultad(req, res) {
    const { id } = req.params;
    try {
        await dificultadService.eliminarDificultad(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearDificultad,
    obtenerDificultad,
    obtenerDificultadPorId,
    actualizarDificultad,
    eliminarDificultad,
};
