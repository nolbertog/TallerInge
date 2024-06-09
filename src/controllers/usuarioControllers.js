const usuarioService = require('../service/usuarioServices');

async function crearUsuario(req, res) {
    try {
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerUsuarios(req, res) {
    try {
        const usuarios = await usuarioService.obtenerUsuario();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
        const usuario = await usuarioService.obtenerUsuarioPorId(id);
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
        } else {
            res.status(200).json(usuario);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarUsuario(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const usuario = await usuarioService.actualizarUsuario(id, newData);
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
        } else {
            res.status(200).json(usuario);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarUsuario(req, res) {
    const { id } = req.params;
    try {
        const usuario = await usuarioService.eliminarUsuario(id);
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function iniciarSesion(req, res) {
    const { username, password } = req.body;
    try {
        const sesion = await usuarioService.iniciarSesion(username, password);
        if (!sesion) {
            res.status(401).json({ error: 'Credenciales inválidas' });
        } else {
            res.status(200).json(sesion);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function recuperarPassword(req, res) {
    const { primaryEmail } = req.body;
    try {
        const sesion = await usuarioService.recuperarPassword(primaryEmail);
        if (!sesion) {
            res.status(401).json({ error: 'Credenciales inválidas' });
        } else {
            res.status(200).json(sesion);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
    iniciarSesion,
    recuperarPassword
};
