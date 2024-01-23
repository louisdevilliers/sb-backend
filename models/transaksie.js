module.exports = (sequelize, Sequelize) => {
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
     
      
    }, {
      tableName: "transaksies"
    });
    return Transaksie;
  };
