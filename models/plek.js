export default (sequelize, Sequelize) => {
    const Plek = sequelize.define("plek", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      naam: {
        type: Sequelize.STRING(25)
      }
      
    }, {
      tableName: "plekke"
    });
    return Plek;
  };