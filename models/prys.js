module.exports = (sequelize, Sequelize) => {
    const Prys = sequelize.define("prys", {
     
      id: { //prysId
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
      prys: {
        type: Sequelize.DECIMAL(4,2)
      }
      
    }, {
      tableName: "pryse",
      name:{
        singular: "prys",
        plural: "pryse"
      }
    });
    return Prys;
  };

  //week_id_fk
  //kultivar_id_fk