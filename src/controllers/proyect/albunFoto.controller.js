const albunFotoServices = require('../../services/proyects/albunFoto.service');

async function crearAlbunFoto(req, res) {
    try {
        const albunFoto = await albunFotoServices.crearRecursosComprometidos(req.body);
        res.status(201).json(albunFoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlbunFoto(req, res) {
    try {
        const albunFoto = await albunFotoServices.obtenerRecursosComprometidos();
        res.status(200).json(albunFoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerAlbunFotoPorId(req, res) {
    const { id } = req.params;
    try {
        const albunFoto = await albunFotoServices.obtenerRecursosComprometidosPorId(id);
        if (!albunFoto) {
            return res.status(404).json({ error: 'AlbunFoto not found' });
        }
        res.status(200).json(albunFoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarAlbunFoto(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const albunFoto = await albunFotoServices.actualizarRecursosComprometidos(id, newData);
        if (!albunFoto) {
            return res.status(404).json({ error: 'AlbunFoto not found' });
        }
        res.status(200).json(albunFoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarAlbunFoto(req, res) {
    const { id } = req.params;
    try {
        const deletedCount = await albunFotoServices.eliminarRecursosComprometidos(id);
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'AlbunFoto not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearAlbunFoto,
    obtenerAlbunFoto,
    obtenerAlbunFotoPorId,
    actualizarAlbunFoto,
    eliminarAlbunFoto,
};
