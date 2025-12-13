'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('produsente', [
       {
         naam: "Moselle",
         kode: "P1",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        naam: "TC RABIE",
        kode: "P2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "G OLIVIER",
        kode: "P3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "M FREDERICKS",
        kode: "P4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "K DZINGWA",
        kode: "P5",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produsente', null, {});
  }
};