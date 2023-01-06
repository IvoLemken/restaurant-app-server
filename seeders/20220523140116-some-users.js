"use strict";
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Apple",
          email: "apple@apple.com",
          phone: 1234567,
          password: bcrypt.hashSync("apple", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
          accountBlocked: false,
        }, 
        {
          name: "Banana",
          email: "banana@banana.com",
          phone: 1234567,
          password: bcrypt.hashSync("banana", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
          accountBlocked: false,
        },  
        {
          name: "Coco",
          email: "coco@coco.com",
          phone: 1234567,
          password: bcrypt.hashSync("coco", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
          accountBlocked: false,
        },  
        {
          name: "admin",
          email: "ad@min.com",
          phone: 1234567,
          password: bcrypt.hashSync("admin", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
          accountBlocked: false,
        },  
        {
          name: "block",
          email: "blo@ck.com",
          phone: 1234567,
          password: bcrypt.hashSync("block", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
          accountBlocked: true,
        },     
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};