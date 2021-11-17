'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("ParpolUsers", "userLevelId", {
      type: Sequelize.INTEGER,
      references: {
        model: "UserLevels",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("ParpolUsers", "userLevelId")
  }
};