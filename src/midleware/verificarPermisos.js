const { promises } = require("nodemailer/lib/xoauth2");

const verificarPermisos = (roles) => async (req, res, next) => { 

    console.log(roles)

    // Verificar si req.user.id_rol está definido
    const rolId = req.headers.id_rol;

    if (!rolId) {
        return res.status(403).json({ error: 'Acceso denegado' });
    }

    switch (rolId) {    
        case '1': // Administrador
            
            break;
        case '2': // Coordinador

            break;
        case '3': // Solicitante
            // El usuario tiene permisos de solicitante, puede realizar acciones específicas para solicitantes
            if (req.url.startsWith('/proyectos') && req.params.id_solicitante == req.user.id_solicitante) {
                
            } else {
                // El usuario no tiene permisos suficientes, devolver un error de acceso denegado
                return res.status(403).json({ error: 'Acceso denegado' });
            }
            break;
        default:
            // El usuario no tiene permisos suficientes, devolver un error de acceso denegado
            return res.status(403).json({ error: 'Acceso denegado y wea' });
            break;
    }

    let status = false
    const checkRoles = roles.map(function (rol) {
       if (rol == rolId) {
        status = true
       }
    });

    await Promise.all(checkRoles);

    if (!status) {
        return res.status(403).json({ error: 'Acceso denegado' });
    }

    return next();

};

module.exports = verificarPermisos;