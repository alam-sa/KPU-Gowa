'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("StatusCalegs", [{
      nama_status: "Terdaftar",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nama_status: "Bakal Calon Legislatif",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nama_status: "Calon Legislatif",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("StatusCalegs", null, {});
  }
};
