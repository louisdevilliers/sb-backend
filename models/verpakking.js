export default (sequelize, Sequelize) => {
    const Verpakking = sequelize.define("verpakking", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      naam: {
        type: Sequelize.STRING(25)
      },
      prys: {
          type: Sequelize.DECIMAL(4,2)
      }
      
    });
    return Verpakking;
  };
