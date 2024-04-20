const proyectoService = require('../service/proyectoServices');

async function crearProyecto(req, res) {
    try {
        const proyecto = await proyectoService.crearProyecto(req.body);
        return res.status(201).json(proyecto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerProyecto(req, res) {
    try {
        const proyecto = await proyectoService.obtenerProyecto();
        return res.status(200).json(proyecto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerProyectoPorId(req, res) {
    const { id } = req.params;
    try {
        const proyecto = await proyectoService.obtenerProyectoPorId(id);
        return res.status(200).json(proyecto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarProyecto(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const proyecto = await proyectoService.actualizarProyecto(id, newData);
        return res.status(200).json(proyecto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarProyecto(req, res) {
    const { id } = req.params;
    try {
        await proyectoService.eliminarProyecto(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearProyecto,
    obtenerProyecto,
    obtenerProyectoPorId,
    actualizarProyecto,
    eliminarProyecto,
};
