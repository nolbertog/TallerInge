const divulgacionService = require('../service/divulgacionServices');

async function crearDivulgacion(req, res) {
    try {
        const divulgacion = await divulgacionService.crearDivulgacion(req.body);
        res.status(201).json(divulgacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDivulgacion(req, res) {
    try {
        const divulgacion = await divulgacionService.obtenerDivulgacion();
        res.status(200).json(divulgacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerDivulgacionPorId(req, res) {
    const { id } = req.params;
    try {
        const divulgacion = await divulgacionService.obtenerDivulgacionPorId(id);
        if (!divulgacion) {
            return res.status(404).json({ error: 'Divulgacion not found' });
        }
        res.status(200).json(divulgacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarDivulgacion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const divulgacion = await divulgacionService.actualizarDivulgacion(id, newData);
        if (!divulgacion) {
            return res.status(404).json({ error: 'Divulgacion not found' });
        }
        res.status(200).json(divulgacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarDivulgacion(req, res) {
    const { id } = req.params;
    try {
        const deletedDivulgacion = await divulgacionService.eliminarDivulgacion(id);
        if (!deletedDivulgacion) {
            return res.status(404).json({ error: 'Divulgacion not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearDivulgacion,
    obtenerDivulgacion,
    obtenerDivulgacionPorId,
    actualizarDivulgacion,
    eliminarDivulgacion,
};
