'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dokumens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ktp: {
        type: Sequelize.STRING
      },
      bb1: {
        type: Sequelize.STRING
      },
      bb2: {
        type: Sequelize.STRING
      },
      ijazah: {
        type: Sequelize.STRING
      },
      suket_sehat: {
        type: Sequelize.STRING
      },
      suket_kpu: {
        type: Sequelize.STRING
      },
      skck: {
        type: Sequelize.STRING
      },
      kta_parpol: {
        type: Sequelize.STRING
      },
      dokumen_lainnya: {
        type: Sequelize.STRING
      },
      ktp_verified: {
        type: Sequelize.BOOLEAN
      },
      bb1_verified: {
        type: Sequelize.BOOLEAN
      },
      bb2_verified: {
        type: Sequelize.BOOLEAN
      },
      ijazah_verified: {
        type: Sequelize.BOOLEAN
      },
      suket_sehat_verified: {
        type: Sequelize.BOOLEAN
      },
      suket_kpu_verified: {
        type: Sequelize.BOOLEAN
      },
      skck_verified: {
        type: Sequelize.BOOLEAN
      },
      kta_parpol_verified: {
        type: Sequelize.BOOLEAN
      },
      dokumen_lainnya_verified: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Dokumens');
  }
};