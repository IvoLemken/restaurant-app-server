'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reservations",
      [
        {
          date: '2023-01-17',
          createdAt: new Date(),
          updatedAt: new Date(),
          tableId: 1,
          userId: 1
        },
        {
          date: '2023-02-12',
          createdAt: new Date(),
          updatedAt: new Date(),
          tableId: 2,
          userId: 2
        },
        {
          date: '2023-01-18',
          createdAt: new Date(),
          updatedAt: new Date(),
          tableId: 3,
          userId: 3
        },
        {
          date: '2023-12-25',
          createdAt: new Date(),
          updatedAt: new Date(),
          tableId: 4,
          userId: 1
        },
        {
          date: '2023-03-03',
          createdAt: new Date(),
          updatedAt: new Date(),
          tableId: 5,
          userId: 2
        },
        {
          date: '2023-05-17',
          createdAt: new Date(),
          updatedAt: new Date(),
          tableId: 1,
          userId: 3
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reservations", null, {});
  }
};
