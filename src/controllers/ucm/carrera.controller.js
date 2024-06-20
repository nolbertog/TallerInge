const carreraService = require('../../services/ucm/carreraServices');
const usuarioService = require("../../services/users/usuarioServices");

async function crearCarrera(req, res) {
    try {
        const carrera = await carreraService.crearCarrera(req.body);
        res.status(201).json(carrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerCarrera(req, res) {
    try {
        const carrera = await carreraService.obtenerCarrera();
        res.status(200).json(carrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerCarreraPorId(req, res) {
    const { id } = req.params;
    try {
        const carrera = await carreraService.obtenerCarreraPorId(id);
        if (!carrera) {
            res.status(404).json({ error: 'Carrera no encontrado' });
        } else {
            res.status(200).json(carrera);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarCarrera(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const carrera = await carreraService.actualizarCarrera(id, newData);
        if (!carrera) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        res.status(200).json(carrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarCarrera(req, res) {
    const { id } = req.params;
    try {
        await carreraService.eliminarCarrera(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearCarrera,
    obtenerCarrera,
    obtenerCarreraPorId,
    actualizarCarrera,
    eliminarCarrera,
};
