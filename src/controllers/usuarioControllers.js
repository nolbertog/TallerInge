const usuarioService = require('../service/usuarioServices');

async function crearUsuario(req, res) {
    try {
        const usuario = await usuarioService.crearUsuario(req.body);
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerUsuarios(req, res) {
    try {
        const usuarios = await usuarioService.obtenerUsuario();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function obtenerUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
        const usuario = await usuarioService.obtenerUsuarioPorId(id);
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function actualizarUsuario(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const usuario = await usuarioService.actualizarUsuario(id, newData);
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function eliminarUsuario(req, res) {
    const { id } = req.params;
    try {
        await usuarioService.eliminarUsuario(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function iniciarSesion(req, res) {
    const { rut, password } = req.body;
    try {
        const sesion = await usuarioService.iniciarSesion(rut, password);
        return res.status(200).json(sesion);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
}

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
    iniciarSesion,
};
