const divulgacionService = require('../service/divulgacionServices');

async function crearDivulgacion(req, res) {
    try {
        const divulgacion = await divulgacionService.crearDivulgacion(req.body);
        return res.status(201).json(divulgacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDivulgacion(req, res) {
    try {
        const divulgacion = await divulgacionService.obtenerDivulgacion();
        return res.status(200).json(divulgacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerDivulgacionPorId(req, res) {
    const { id } = req.params;
    try {
        const divulgacion = await divulgacionService.obtenerDivulgacionPorId(id);
        return res.status(200).json(divulgacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarDivulgacion(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const divulgacion = await divulgacionService.actualizarDivulgacion(id, newData);
        return res.status(200).json(divulgacion);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarDivulgacion(req, res) {
    const { id } = req.params;
    try {
        await divulgacionService.eliminarDivulgacion(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearDivulgacion,
    obtenerDivulgacion,
    obtenerDivulgacionPorId,
    actualizarDivulgacion,
    eliminarDivulgacion,
};
