const Usuario = require('../db/models/user');

async function crearUsuario(usuarioData) {
    try {
        const usuario = await Usuario.create(usuarioData);
        return usuario;
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

async function iniciarSesion(rut, password) {
    try {
        const usuario = await Usuario.findOne({ where: { rut } });
        if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
            throw new Error('Credenciales incorrectas');
        }
        const token = jwt.sign({ userId: usuario.id }, 'tu_secreto_secreto', { expiresIn: '1h' });
        return { token, userId: usuario.id, nombre: usuario.nombre };
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
