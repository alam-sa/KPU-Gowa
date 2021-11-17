'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("ParpolUsers", "partaiId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Partais",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("ParpolUsers", "partaiId")
  }
};