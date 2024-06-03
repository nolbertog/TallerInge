const comunaService = require('../service/comunaServices');

async function crearComuna(req, res) {
    try {
        const comuna = await comunaService.crearComuna(req.body);
        res.status(201).json(comuna);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerComuna(req, res) {
    try {
        const comuna = await comunaService.obtenerComuna();
        res.status(200).json(comuna);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerComunaPorId(req, res) {
    const { id } = req.params;
    try {
        const comuna = await comunaService.obtenerComunaPorId(id);
        if (!comuna) {
            return res.status(404).json({ error: 'Comuna not found' });
        }
        res.status(200).json(comuna);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarComuna(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const comuna = await comunaService.actualizarComuna(id, newData);
        if (!comuna) {
            return res.status(404).json({ error: 'Comuna not found' });
        }
        res.status(200).json(comuna);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarComuna(req, res) {
    const { id } = req.params;
    try {
        const deletedComuna = await comunaService.eliminarComuna(id);
        if (!deletedComuna) {
            return res.status(404).json({ error: 'Comuna not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearComuna,
    obtenerComuna,
    obtenerComunaPorId,
    actualizarComuna,
    eliminarComuna,
};
