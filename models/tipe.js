module.exports = (sequelize, Sequelize) => {
    const Tipe = sequelize.define("tipe", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      tipe: {
        type: Sequelize.STRING(12)
      }
      
    });
    return Tipe;
  };
