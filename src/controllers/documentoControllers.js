const documentoService = require('../service/documentoServices');

async function crearDocumento(req, res) {
    try {
        const documento = await documentoService.crearDocumento(req.body);
        res.status(201).json(documento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDocumento(req, res) {
    try {
        const documento = await documentoService.obtenerDocumento();
        res.status(200).json(documento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDocumentoPorId(req, res) {
    const { id } = req.params;
    try {
        const documento = await documentoService.obtenerDocumentoPorId(id);
        if (!documento) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }
        res.status(200).json(documento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarDocumento(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const documento = await documentoService.actualizarDocumento(id, newData);
        if (!documento) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }
        res.status(200).json(documento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarDocumento(req, res) {
    const { id } = req.params;
    try {
        await documentoService.eliminarDocumento(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearDocumento,
    obtenerDocumento,
    obtenerDocumentoPorId,
    actualizarDocumento,
    eliminarDocumento,
};
