'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('kleure', [
       {
         naam: "Wit gepit",
         kode: "WSD",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        naam: "Wit pitloos",
        kode: "WSL",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Swart gepit",
        kode: "BSD",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Swart pitloos",
        kode: "BSL",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Rooi gepit",
        kode: "RSD",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        naam: "Rooi pitloos",
        kode: "RSL",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('kleure', null, {});
  }
};