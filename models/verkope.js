module.exports = (sequelize, Sequelize) => {
    const Verkope = sequelize.define("verkope", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      qty: {
        type: Sequelize.INTEGER
      },
      faktuurId: {
        type: Sequelize.INTEGER
      }
      
    });
    return Verkope;
  };

  //produsent_id_fk
  //item_id_fk