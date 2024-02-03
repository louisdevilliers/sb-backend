export default (sequelize, Sequelize) => {
    const Mark = sequelize.define("mark", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      naam: {
        type: Sequelize.STRING(25)
      }
      
    },{
      tableName: "markte"
    });
    return Mark;
  };