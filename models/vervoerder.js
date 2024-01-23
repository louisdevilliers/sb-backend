module.exports = (sequelize, Sequelize) => {
    const Vervoerder = sequelize.define("vervoerder", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      naam: {
        type: Sequelize.STRING(25)
      }
      
    });
    return Vervoerder;
  };
