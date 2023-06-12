'use strict';

const { hashPassword } = require('../helper/encrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = require("../data/users.json");
    user.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hashPassword(el.password)
    });
    await queryInterface.bulkInsert('Users', user, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {}, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
