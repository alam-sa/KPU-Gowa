'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Calegs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      NIK: {
        type: Sequelize.STRING
      },
      noHp: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      agama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      kabupaten: {
        type: Sequelize.STRING
      },
      no_urut: {
        type: Sequelize.INTEGER
      },
      email: {
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Calegs');
  }
};