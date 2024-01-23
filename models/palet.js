module.exports = (sequelize, Sequelize) => {
    const Palet = sequelize.define("palet", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      datum: {
        type: Sequelize.DATE
      },
      nommer: {
        type: Sequelize.STRING(4)
      },
      uitlaai: {
        type: Sequelize.BOOLEAN
      }
      
    }, {
      tableName: "palette"
    });
    return Palet;
  };