'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "UserLevelId", {
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
    await queryInterface.removeColumn("Users", "UserLevelId")
  }
};