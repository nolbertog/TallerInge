const listadoAlumnosVoluntariosServices = require('../service/listadoAlumnosVoluntariosServices');

async function crearListadoAlumnosVoluntarios(req, res) {
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.crearRecursosComprometidos(req.body);
        res.status(201).json(listadoAlumnosVoluntarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoAlumnosVoluntarios(req, res) {
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidos();
        res.status(200).json(listadoAlumnosVoluntarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerListadoAlumnosVoluntariosPorId(req, res) {
    const { id } = req.params;
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidosPorId(id);
        if (!listadoAlumnosVoluntarios) {
            return res.status(404).json({ error: 'Listado de alumnos voluntarios no encontrado' });
        }
        res.status(200).json(listadoAlumnosVoluntarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarListadoAlumnosVoluntarios(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const listadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.actualizarRecursosComprometidos(id, newData);
        if (!listadoAlumnosVoluntarios) {
            return res.status(404).json({ error: 'Listado de alumnos voluntarios no encontrado' });
        }
        res.status(200).json(listadoAlumnosVoluntarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarListadoAlumnosVoluntarios(req, res) {
    const { id } = req.params;
    try {
        const deletedListadoAlumnosVoluntarios = await listadoAlumnosVoluntariosServices.eliminarRecursosComprometidos(id);
        if (!deletedListadoAlumnosVoluntarios) {
            return res.status(404).json({ error: 'Listado de alumnos voluntarios no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntariosPorId,
    actualizarListadoAlumnosVoluntarios,
    eliminarListadoAlumnosVoluntarios,
};
