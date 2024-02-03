export default (sequelize, Sequelize) => {
    const Week = sequelize.define("week", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      nommer: {
        type: Sequelize.STRING(2)
      },
      letter: {
        type: Sequelize.STRING(1)
      }
      
    }, {
      tableName: "weke"
    });
    return Week;
  };