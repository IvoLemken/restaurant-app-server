'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn(
        'users',
        'isAdmin',{
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      ),
      queryInterface.addColumn(
      'users',
      'accountBlocked',{
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      )
    ]);
  },
  async down(queryInterface, Sequelize) { 
    await Promise.all([
      queryInterface.removeColumn(
        'users',
        'isAdmin'
      ),
      queryInterface.removeColumn(
        'users',
        'accountBlocked'
      )
    ])
  }
};