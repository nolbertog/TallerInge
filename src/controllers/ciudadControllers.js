const ciudadService = require('../service/ciudadServices');

async function crearCiudad(req, res) {
    try {
        const ciudad = await ciudadService.crearCiudad(req.body);
        res.status(201).json(ciudad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerCiudad(req, res) {
    try {
        const ciudad = await ciudadService.obtenerCiudad();
        res.status(200).json(ciudad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerCiudadPorId(req, res) {
    const { id } = req.params;
    try {
        const ciudad = await ciudadService.obtenerCiudadPorId(id);
        if (!ciudad) {
            return res.status(404).json({ error: 'Ciudad not found' });
        }
        res.status(200).json(ciudad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarCiudad(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const ciudad = await ciudadService.actualizarCiudad(id, newData);
        if (!ciudad) {
            return res.status(404).json({ error: 'Ciudad not found' });
        }
        res.status(200).json(ciudad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarCiudad(req, res) {
    const { id } = req.params;
    try {
        const ciudad = await ciudadService.eliminarCiudad(id);
        if (!ciudad) {
            return res.status(404).json({ error: 'Ciudad not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function eliminarCiudad(req, res) {
    const { id } = req.params;
    try {
        await ciudadService.eliminarCiudad(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearCiudad,
    obtenerCiudad,
    obtenerCiudadPorId,
    actualizarCiudad,
    eliminarCiudad,
};
