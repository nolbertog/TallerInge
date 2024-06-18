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
        rut: '18.228.703-2',
        username: 'Nolberto',
        lastname: 'Gonzalez',
        password: 'Troncoso',
        id_career: 1,
        id_rol: 1,
        primaryEmail: 'nolberto.en@gmail.com',
        secundaryEmail: 'nolberto.en@gmail.com',
        description: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        rut: '20.947.622-3',
        username: 'Claudio',
        lastname: 'Rojas',
        password: 'Carrera',
        id_career: 1,
        id_rol: 1,
        primaryEmail: 'claudio.rojas.carrera@gmail.com',
        secundaryEmail: 'claudio.rojas.carrera@gmail.com',
        description: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  }
};
