/**
 *  seeder mock user seeds
 *
 * 
 *  seeders to mock 10 users in to user table
 * 
 *
 *  @Nabeekh nabeekh@gmail.com
 *
 */

'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');
require('dotenv').config()

module.exports = {

  up: async (queryInterface, Sequelize) => {
    const users = [];
        let password = await bcrypt.hash("somthing123", 10)
        for (let i = 0; i < 10; i++) {
          const seedData = {
            id: uuidv4(),
            firstName: 'appUser'+i,
            lastName: "test",
            phone: faker.phone.phoneNumber(),
            email: 'appuser'+i+'@mail.com',
            password: password,
            picture: faker.image.imageUrl(),
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        users.push(seedData);
        };

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */


    return queryInterface.bulkDelete('Users', null, {});
  }
};
