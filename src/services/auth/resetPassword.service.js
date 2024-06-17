const bcrypt = require('bcrypt');
const User = require('../../db/models/users/user'); // Importa el modelo de usuario

// Importa los módulos necesarios

// Define la función para actualizar la contraseña
async function resetPasswordService(token, newPassword) {
    try {
        // Busca al usuario por el token
        const user = await User.findOne({ resetToken: token });

        // Verifica si el usuario existe
        if (!user) {
            throw new Error('Token inválido');
        }

        // Genera un hash de la nueva contraseña
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Actualiza la contraseña del usuario
        user.password = hashedPassword;
        user.resetToken = null; // Elimina el token de reseteo

        // Guarda los cambios en la base de datos
        await user.save();

        // Retorna un mensaje de éxito
        return 'Contraseña actualizada exitosamente';
    } catch (error) {
        // Maneja cualquier error ocurrido durante el proceso
        throw new Error(`Error al actualizar la contraseña: ${error.message}`);
    }
}

module.exports = resetPasswordService;