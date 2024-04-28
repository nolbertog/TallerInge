const Usuario = require('../db/models/user');

async function crearUsuario(usuarioData) {
    try {
        const usuario = await Usuario.create(usuarioData);
        return 'Usuario creado correctamente';
    } catch (error) {
        throw new Error('Error al crear el Usuario');
    }
}

async function obtenerUsuario() {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;
    } catch (error) {
        throw new Error('Error al obtener Usuariosklas');
    }
}

async function obtenerUsuarioPorId(id) {
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        return usuario;
    } catch (error) {
        throw new Error('Error al obtener Usuario por ID');
    }
}

async function actualizarUsuario(id, newData) {
    try {
        const [updated] = await Usuario.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Usuario no encontrado');
        }
        const usuario = await Usuario.findByPk(id);
        return usuario;
    } catch (error) {
        throw new Error('Error al actualizar Usuario');
    }
}

async function eliminarUsuario(id) {
    try {
        const deleted = await Usuario.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Usuario no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar Usuario');
    }
}

async function iniciarSesion(username, password) {
    try {
        const usuario = await Usuario.findOne({ where: { username } });
        if (!usuario) {
            throw new Error('Nombre de usuario incorrecto');
        }
        const match = await bcrypt.compare(password, usuario.passwordHash);
        if (!match) {
            throw new Error('Contraseña incorrecta');
        }
        return { message: 'Inicio de sesión exitoso', usuario: usuario };
    } catch (error) {
        throw new Error('Error al iniciar sesión');
    }
}


module.exports = {
    crearUsuario,
    obtenerUsuario,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
    iniciarSesion,
};
