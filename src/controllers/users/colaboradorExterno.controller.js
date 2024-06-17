const listadoAlumnosVoluntariosServices = require('../../services/users/listadoAlumnosVoluntariosServices');

// Create a new external collaborator
async function crearColaboradorExterno(req, res) {
    try {
        const colaboradorExterno = await listadoAlumnosVoluntariosServices.crearRecursosComprometidos(req.body);
        res.status(201).json(colaboradorExterno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get all external collaborators
async function obtenerColaboradoresExternos(req, res) {
    try {
        const colaboradoresExternos = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidos();
        res.status(200).json(colaboradoresExternos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get an external collaborator by ID
async function obtenerColaboradorExternoPorId(req, res) {
    const { id } = req.params;
    try {
        const colaboradorExterno = await listadoAlumnosVoluntariosServices.obtenerRecursosComprometidosPorId(id);
        if (!colaboradorExterno) {
            return res.status(404).json({ error: 'External collaborator not found' });
        }
        res.status(200).json(colaboradorExterno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update an external collaborator
async function actualizarColaboradorExterno(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const colaboradorExterno = await listadoAlumnosVoluntariosServices.actualizarRecursosComprometidos(id, newData);
        if (!colaboradorExterno) {
            return res.status(404).json({ error: 'External collaborator not found' });
        }
        res.status(200).json(colaboradorExterno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete an external collaborator
async function eliminarColaboradorExterno(req, res) {
    const { id } = req.params;
    try {
        const deletedCount = await listadoAlumnosVoluntariosServices.eliminarRecursosComprometidos(id);
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'External collaborator not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearColaboradorExterno,
    obtenerColaboradoresExternos,
    obtenerColaboradorExternoPorId,
    actualizarColaboradorExterno,
    eliminarColaboradorExterno,
};
