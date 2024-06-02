const albunFotoServices = require('../service/albunFotoServices');

async function crearAlbunFoto(req, res) {
    try {
        const albunFoto = await albunFotoServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(albunFoto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlbunFoto(req, res) {
    try {
        const albunFoto = await albunFotoServices.obtenerRecursosComprometidos();
        return res.status(200).json(albunFoto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerAlbunFotoPorId(req, res) {
    const { id } = req.params;
    try {
        const albunFoto = await albunFotoServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(albunFoto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarAlbunFoto(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const albunFoto = await albunFotoServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(albunFoto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarAlbunFoto(req, res) {
    const { id } = req.params;
    try {
        await albunFotoServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAlbunFoto,
    obtenerAlbunFoto,
    obtenerAlbunFotoPorId,
    actualizarAlbunFoto,
    eliminarAlbunFoto,
};
