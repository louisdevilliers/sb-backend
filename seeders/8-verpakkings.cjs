'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('verpakkings', [
       {
         naam: "Buff Tape",
         prys: 17.00,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        naam: "SB 8.5kg Boks",
        prys: 9.95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('verpakkings', null, {});
  }
};