const verificarPermisos = (req, res, next) => {
    // Obtener el rol del usuario desde la sesión o el token de autenticación
    const rol = req.user.id_rol;

    switch (rol) {
        case 'administrador':
            // El usuario tiene permisos de administrador, puede realizar todas las acciones
            next();
            break;
        case 'coordinador':
            // El usuario tiene permisos de coordinador, puede realizar acciones específicas para coordinadores
            // Aquí puedes agregar la lógica para verificar los permisos de coordinador
            // Ejemplo: if (req.url === '/crearProyecto') { ... }
            next();
            break;
        case 'solicitante':
            // El usuario tiene permisos de solicitante, puede realizar acciones específicas para solicitantes
            if (req.url.startsWith('/proyectos/') && req.params.id_solicitante === req.user.id_solicitante) {
                // El usuario solicitante solo puede modificar sus propios proyectos
                next();
            } else {
                // El usuario no tiene permisos suficientes, devolver un error de acceso denegado
                res.status(403).json({ error: 'Acceso denegado' });
            }
            break;
        default:
            // El usuario no tiene permisos suficientes, devolver un error de acceso denegado
            res.status(403).json({ error: 'Acceso denegado' });
            break;
    }
};

module.exports = verificarPermisos;
