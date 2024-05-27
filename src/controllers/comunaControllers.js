const comunaService = require('../service/comunaServices');

async function crearComuna(req, res) {
    try {
        const comuna = await comunaService.crearComuna(req.body);
        return res.status(201).json(comuna);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerComuna(req, res) {
    try {
        const comuna = await comunaService.obtenerComuna();
        return res.status(200).json(comuna);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerComunaPorId(req, res) {
    const { id } = req.params;
    try {
        const comuna = await comunaService.obtenerComunaPorId(id);
        return res.status(200).json(comuna);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarComuna(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const comuna = await comunaService.actualizarComuna(id, newData);
        return res.status(200).json(comuna);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarComuna(req, res) {
    const { id } = req.params;
    try {
        await comunaService.eliminarComuna(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearComuna,
    obtenerComuna,
    obtenerComunaPorId,
    actualizarComuna,
    eliminarComuna,
};
