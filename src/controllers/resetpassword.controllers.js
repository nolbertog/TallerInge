const bcrypt = require('bcrypt');
const User = require('../models/user');

async function resetPasswordC(token, newPassword) {
    try {
        const user = await User.findOne({ resetToken: token });

        if (!user) {
            throw new Error('Invalid token');
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetToken = null;

        await user.save();

        return 'Password updated successfully';
    } catch (error) {
        throw new Error(`Error updating password: ${error.message}`);
    }
}

module.exports = resetPasswordController;