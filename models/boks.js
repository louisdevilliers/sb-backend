module.exports = (sequelize, Sequelize) => {
    const Boks = sequelize.define("boks", {
      
      id: { //boksId
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    
      naam: {
        type: Sequelize.STRING(45)
      },
      grootte: {
        type: Sequelize.DECIMAL(2,1)
      },
      kode: {
        type: Sequelize.STRING(6)
      },
      brand: {
        type: Sequelize.STRING(2)
      }
      
    }, {
      tableName: "bokse",
      name:{
        singular: "boks",
        plural: "bokse"
      }
    });
    return Boks;
  };