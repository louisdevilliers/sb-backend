"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "plekke",
      [
        {
          naam: "PTA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "JHB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Vereeniging",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Klerksdorp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Welkom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Springs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Durban",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Pietermaritzburg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "Bloemfontein",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('plekke', null, {});
  }
};