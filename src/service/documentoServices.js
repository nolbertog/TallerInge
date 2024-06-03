const Documento = require('../db/models/documento');

async function crearDocumento(documentoData) {
    try {
        const documento = await Documento.create(documentoData);
        return documento;
    } catch (error) {
        throw new Error('Error al crear el documento');
    }
}

async function obtenerDocumento() {
    try {
        const documento = await Documento.findAll();
        return documento;
    } catch (error) {
        throw new Error('Error al obtener los documentos');
    }
}

async function obtenerDocumentoPorId(id) {
    try {
        const documento = await Documento.findByPk(id);
        if (!documento) {
            throw new Error('Documento no encontrado');
        }
        return documento;
    } catch (error) {
        throw new Error('Error al obtener el documento por ID');
    }
}

async function actualizarDocumento(id, newData) {
    try {
        const [updated] = await Documento.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Documento no encontrado');
        }
        const documento = await Documento.findByPk(id);
        return documento;
    } catch (error) {
        throw new Error('Error al actualizar el documento');
    }
}

async function eliminarDocumento(id) {
    try {
        const deleted = await Documento.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Documento no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el documento');
    }
}

module.exports = {
    crearDocumento,
    obtenerDocumento,
    obtenerDocumentoPorId,
    actualizarDocumento,
    eliminarDocumento,
};
