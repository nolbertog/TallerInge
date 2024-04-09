const Usuario= require('../BD/models/usuario');

// Crear un nuevo Contenido
async function crearUsuario(req, res) {
    try {
        const usuario = await Usuario.create(req.body);
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el Usuario' });
    }
}

// Obtener todos los Contenido
async function obtenerUsuario(req, res) {
    try {
        const usuario = await Usuario.findAll();
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener Usuarios' });
    }
}

async function obtenerUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        return res.status(200).json(usuario);
      }
      return res.status(404).json({ error: 'Usuario no encontrado' });
    } catch (error) {
      console.error('Error al obtener Usuario por ID:', error);
      return res.status(500).json({ error: 'Error al obtener Carrera por ID' });
    }
  }

// Actualizar un Ramo
async function actualizarUsuario(req, res) {
    const { id } = req.params;
    try {
        const [updated] = await Usuario.update(req.body, {
            where: { id },
        });
        if (updated) {
            const usuario = await Usuario.findOne({ where: { id } });
            return res.status(200).json(usuario);
        }
        return res.status(404).json({ error: 'usuario no encontrado' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar Usuario' });
    }
}

// Eliminar un Ramo
async function eliminarUsuario(req, res) {
    const { id } = req.params;
    try {
        const deleted = await Usuario.destroy({
            where: { id },
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Usuario no encontrado' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar Usuario' });
    }
}

async function iniciarSesion(req, res) {
    const { rut, password } = req.body;
  
    try {
      // Buscar al usuario por el rut
      const usuario = await Usuario.findOne({ where: { rut } });
  
      // Verificar si el usuario existe y la contraseña es correcta
      if (usuario && bcrypt.compareSync(password, usuario.password)) {
        // Generar un token de sesión
        const token = jwt.sign({ userId: usuario.id }, 'tu_secreto_secreto', { expiresIn: '1h' });
  
        // Devolver el token y otros detalles del usuario si es necesario
        return res.status(200).json({ token, userId: usuario.id, nombre: usuario.nombre });
      }
  
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  }

module.exports = {
    crearUsuario,
    iniciarSesion,
    obtenerUsuario,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario, 
};