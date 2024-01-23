'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('markte', [
       {
         naam: "Botha & Roodt",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        naam: "Prinsloo & Venter",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Execu Fruit",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "CL De Villers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Dapper",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "RSA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Subtropico",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Garfield",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Delta",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Natalia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Boere Trust",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('markte', null, {});
  }
};
