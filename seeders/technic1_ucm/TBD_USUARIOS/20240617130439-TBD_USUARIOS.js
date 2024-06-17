'use strict';
//20240617130439-TBD_USUARIOS.js
module.exports = {
  async up (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('TBD_USUARIOS', {
      id_career: {
        [Op.between]: [1, 2]
      }
    }, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TBD_USUARIOS', [
      {
        id: 1,
        rut: '12345678-9',
        username: 'user1',
        lastname: 'lastname1',
        password: 'password1',
        id_career: 1,
        id_rol: 1,
        primaryEmail: 'user1@example.com',
        secundaryEmail: 'user1.sec@example.com',
        description: 'Description 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        rut: '98765432-1',
        username: 'user2',
        lastname: 'lastname2',
        password: 'password2',
        id_career: 2,
        id_rol: 2,
        primaryEmail: 'user2@example.com',
        secundaryEmail: 'user2.sec@example.com',
        description: 'Description 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  }
};
