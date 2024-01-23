'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('vervoerders', [
       {
         naam: "Transcool",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        naam: "Pro Truck",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('vervoerders', null, {});
  }
};
