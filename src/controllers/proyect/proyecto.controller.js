const proyectoService = require('../../services/proyects/proyecto.service');

async function crearProyecto(req, res) {
    try {
        const proyecto = await proyectoService.crearProyecto(req.body);
        res.status(201).json(proyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerProyecto(req, res) {
    try {
        const proyecto = await proyectoService.obtenerProyecto();
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerProyectoPorId(req, res) {
    const { id } = req.params;
    try {
        const proyecto = await proyectoService.obtenerProyectoPorId(id);
        if (!proyecto) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarProyecto(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const proyecto = await proyectoService.actualizarProyecto(id, newData);
        if (!proyecto) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarProyecto(req, res) {
    const { id } = req.params;
    try {
        const proyecto = await proyectoService.eliminarProyecto(id);
        if (!proyecto) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearProyecto,
    obtenerProyecto,
    obtenerProyectoPorId,
    actualizarProyecto,
    eliminarProyecto,
};
