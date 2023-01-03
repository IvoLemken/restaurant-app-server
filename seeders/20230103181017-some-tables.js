'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tables",
      [
        {
          seats: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seats: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seats: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seats: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },   
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tables", null, {});
  }
};
