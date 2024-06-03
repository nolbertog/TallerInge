const actividadesComprometidasServices = require('../service/actividadesComprometidasServices');

async function crearActividadesComprometidas(req, res, next) {
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.crearRecursosComprometidos(req.body);
        res.status(201).json(actividadesComprometidas);
    } catch (error) {
        next(error);
    }
}

async function obtenerActividadesComprometidas(req, res, next) {
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.obtenerRecursosComprometidos();
        res.status(200).json(actividadesComprometidas);
    } catch (error) {
        next(error);
    }
}

async function obtenerActividadesComprometidasPorId(req, res, next) {
    const { id } = req.params;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.obtenerRecursosComprometidosPorId(id);
        if (!actividadesComprometidas) {
            res.status(404).json({ error: 'Actividades comprometidas no encontradas' });
        } else {
            res.status(200).json(actividadesComprometidas);
        }
    } catch (error) {
        next(error);
    }
}

async function actualizarActividadesComprometidas(req, res, next) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.actualizarRecursosComprometidos(id, newData);
        if (!actividadesComprometidas) {
            res.status(404).json({ error: 'Actividades comprometidas no encontradas' });
        } else {
            res.status(200).json(actividadesComprometidas);
        }
    } catch (error) {
        next(error);
    }
}

async function eliminarActividadesComprometidas(req, res, next) {
    const { id } = req.params;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.eliminarRecursosComprometidos(id);
        if (!actividadesComprometidas) {
            res.status(404).json({ error: 'Actividades comprometidas no encontradas' });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    crearActividadesComprometidas,
    obtenerActividadesComprometidas,
    obtenerActividadesComprometidasPorId,
    actualizarActividadesComprometidas,
    eliminarActividadesComprometidas,
};
