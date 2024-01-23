'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('bokse', [
       {
         naam: "Spes Bona 1.5kg",
         grootte: 1.5,
         kode: "V 1.5",
         brand: "SB",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        naam: "Generic 4.5kg",
        grootte: 4.5,
        kode: "GE 4.5",
        brand: "GE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Generic 5kg",
        grootte: 5,
        kode: "GE 5",
        brand: "GE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Generic 8.5kg",
        grootte: 8.5,
        kode: "GE 8.5",
        brand: "GE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Spes Bona 8.5kg",
        grootte: 8.5,
        kode: "SB 8.5",
        brand: "SB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Generic 9kg",
        grootte: 9,
        kode: "GE 9",
        brand: "GE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Generic 1.5kg",
        grootte: 1.5,
        kode: "GE 1.5",
        brand: "GE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('bokse', null, {});
  }
};
