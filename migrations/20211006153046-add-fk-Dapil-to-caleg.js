'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Calegs", "dapilId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Dapils",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Calegs", "dapilId")
  }
};