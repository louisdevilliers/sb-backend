'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.bulkInsert('weke', [
        {
            
            nommer: 3,
            letter: "a",
            createdAt: new Date(),
            updatedAt: new Date()
        }
      
      ], {});
  },

  async down(queryInterface, Sequelize) {
   await queryInterface.bulkDelete('weke', null, {});
 }
};
