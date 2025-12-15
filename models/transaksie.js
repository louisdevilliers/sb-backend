export default (sequelize, Sequelize) => {
  const Transaksie = sequelize.define("transaksie", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nbokse: {
      type: Sequelize.INTEGER
    },
    stackId: {
      type: Sequelize.INTEGER
    },
    faktuurId: {
      type: Sequelize.INTEGER
    }


  }, {
    tableName: "transaksies"
  });
  return Transaksie;
};
