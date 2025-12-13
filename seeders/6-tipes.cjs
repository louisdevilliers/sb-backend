'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tipes', [
       {
        tipe: "DR Aankope",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        tipe: "VPM Verkope",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipe: "DR Verkope",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipes', null, {});
  }
};