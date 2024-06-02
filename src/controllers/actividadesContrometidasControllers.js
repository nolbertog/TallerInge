const actividadesComprometidasServices = require('../service/actividadesComprometidasServices');

async function crearActividadesComprometidas(req, res) {
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.crearRecursosComprometidos(req.body);
        return res.status(201).json(actividadesComprometidas);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerActividadesComprometidas(req, res) {
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.obtenerRecursosComprometidos();
        return res.status(200).json(actividadesComprometidas);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerActividadesComprometidasPorId(req, res) {
    const { id } = req.params;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.obtenerRecursosComprometidosPorId(id);
        return res.status(200).json(actividadesComprometidas);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarActividadesComprometidas(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.actualizarRecursosComprometidos(id, newData);
        return res.status(200).json(actividadesComprometidas);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarActividadesComprometidas(req, res) {
    const { id } = req.params;
    try {
        await actividadesComprometidasServices.eliminarRecursosComprometidos(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearActividadesComprometidas,
    obtenerActividadesComprometidas,
    obtenerActividadesComprometidasPorId,
    actualizarActividadesComprometidas,
    eliminarActividadesComprometidas,
};
