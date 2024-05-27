const documentoService = require('../service/documentoServices');

async function crearDocumento(req, res) {
    try {
        const documento = await documentoService.crearDocumento(req.body);
        return res.status(201).json(documento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDocumento(req, res) {
    try {
        const documento = await regionService.obtenerDocumento();
        return res.status(200).json(documento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDocumentoPorId(req, res) {
    const { id } = req.params;
    try {
        const documento = await documentoService.obtenerDocumentoPorId(id);
        return res.status(200).json(documento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarDocumento(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const documento = await documentoService.actualizarDocumento(id, newData);
        return res.status(200).json(documento);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarDocumento(req, res) {
    const { id } = req.params;
    try {
        await documentoService.eliminarDocumento(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearDocumento,
    obtenerDocumento,
    obtenerDocumentoPorId,
    actualizarDocumento,
    eliminarDocumento,
};
