const jwt = require('jsonwebtoken');
const config = require('../config');

// Define el middleware
const authMiddleware = (req, res, next) => {
    // Obtén el token de autorización de la respuesta después del inicio de sesión
    const token = req.body.token;

    // Verifica si el token existe
    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autorización' });
    }

    try {
        // Verifica y decodifica el token
        const decoded = jwt.verify(token, config.jwtSecret);

        // Agrega el objeto decodificado al objeto de solicitud para su uso posterior
        req.user = decoded;

        // Continúa con la siguiente función de middleware
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token de autorización inválido' });
    }
};

// Exporta el middleware
module.exports = authMiddleware;