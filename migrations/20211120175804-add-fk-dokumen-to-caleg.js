'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Calegs", "dokumenId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Dokumens",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Calegs", "dokumenId")
  }
};