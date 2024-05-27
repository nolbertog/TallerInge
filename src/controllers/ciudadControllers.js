const ciudadService = require('../service/ciudadServices');

async function crearCiudad(req, res) {
    try {
        const ciudad = await ciudadService.crearCiudad(req.body);
        return res.status(201).json(Ciudad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerCiudad(req, res) {
    try {
        const ciudad = await ciudadService.obtenerRegion();
        return res.status(200).json(ciudad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerCiudadPorId(req, res) {
    const { id } = req.params;
    try {
        const ciudad = await ciudadService.obtenerCiudadPorId(id);
        return res.status(200).json(ciudad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarCiudad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const ciudad = await ciudadService.actualizarCiudad(id, newData);
        return res.status(200).json(ciudad);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarCiudad(req, res) {
    const { id } = req.params;
    try {
        await ciudadService.eliminarCiudad(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearCiudad,
    obtenerCiudad,
    obtenerCiudadPorId,
    actualizarCiudad,
    eliminarCiudad,
};
