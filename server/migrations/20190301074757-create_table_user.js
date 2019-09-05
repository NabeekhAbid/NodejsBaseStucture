/**
 *  migrations createuser.js
 *
 * 
 * User migration to create a user table in the database
 * 
 *
 * @Nabeekh nabeekh@gmail.com
 *
 */

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING(500)
      },
      // **  IF ROLE IS REQUIRED UNCOMMENT IT ***
      // role: {
      //   type:   Sequelize.ENUM,
      //   values: ['Admin', 'Client', 'SubAdmin']
      // },
      referenceIdFacebook: {
        type: Sequelize.STRING
      },
      referenceIdGoogle: {
        type: Sequelize.STRING
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      resetPasswordToken: {
        type: Sequelize.STRING
      },
      confirmSignup: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};