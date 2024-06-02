const listadoAlumnosVoluntariosServices = require('../service/listadoAlumnosVoluntariosServices');

async function crearListadoAlumnosVoluntarios(req, res) {
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(listadoAlumnosVoluntarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoAlumnosVoluntarios(req, res) {
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidos();
        return res.status(200).json(listadoAlumnosVoluntarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoAlumnosVoluntariosPorId(req, res) {
    const { id } = req.params;
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(listadoAlumnosVoluntarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarListadoAlumnosVoluntarios(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(listadoAlumnosVoluntarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarListadoAlumnosVoluntarios(req, res) {
    const { id } = req.params;
    try {
        await listadoAlumnosVoluntariosServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntariosPorId,
    actualizarListadoAlumnosVoluntarios,
    eliminarListadoAlumnosVoluntarios,
};
