const carreraService = require('../service/carreraServices');

async function crearCarrera(req, res) {
    try {
        const carrera = await carreraService.crearRegion(req.body);
        return res.status(201).json(carrera);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerCarrera(req, res) {
    try {
        const carrera = await carreraService.obtenerCarrera();
        return res.status(200).json(carrera);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerCarreraPorId(req, res) {
    const { id } = req.params;
    try {
        const carrera = await caches.obtenerCarreraPorId(id);
        return res.status(200).json(carrera);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarCarrera(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const carrera = await carreraService.actualizarCarrera(id, newData);
        return res.status(200).json(carrera);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarCarrera(req, res) {
    const { id } = req.params;
    try {
        await carreraService.eliminarCarrera(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearCarrera,
    obtenerCarrera,
    obtenerCarreraPorId,
    actualizarCarrera,
    eliminarCarrera,
};
