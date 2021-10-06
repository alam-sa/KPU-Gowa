'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("UserLevels", [{
      user_level: "super admin",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      user_level: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      user_level: "user",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("UserLevels", null, {});
  }
};
