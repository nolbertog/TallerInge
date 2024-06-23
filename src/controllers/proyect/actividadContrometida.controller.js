const actividadesComprometidasServices = require('../../services/proyects/actividadComprometida.service');
const ciudadService = require("../../services/address/ciudad.service");

async function crearActividadesComprometidas(req, res, next) {
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.crearActividadesComprometidas(req.body);
        res.status(201).json(actividadesComprometidas);
    } catch (error) {
        next(error);
    }
}

async function obtenerActividadesComprometidas(req, res, next) {
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.obtenerActividadesComprometidas();
        res.status(200).json(actividadesComprometidas);
    } catch (error) {
        next(error);
    }
}

async function obtenerActividadesComprometidasPorId(req, res) {
    const { id } = req.params;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.obtenerActividadesComprometidaPorId(id);
        if (!actividadesComprometidas) {
            return res.status(404).json({ error: 'Ciudad not found' });
        }
        res.status(200).json(actividadesComprometidas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarActividadesComprometidas(req, res, next) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const actividadesComprometidas = await actividadesComprometidasServices.actualizarActividadesComprometida(id, newData);
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
        const actividadesComprometidas = await actividadesComprometidasServices.eliminarActividadesComprometida(id);
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
