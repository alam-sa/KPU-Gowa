'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("StatusCalegs", [{
      nama_status: "Isi Data & Berkas",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nama_status: "Menunggu Verifikasi Partai",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nama_status: "Menunggu Verifikasi KPU",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nama_status: "Terverifikasi",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("StatusCalegs", null, {});
  }
};
