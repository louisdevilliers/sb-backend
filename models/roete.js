

//const Load = require("./load.js")

module.exports = (sequelize, Sequelize) => {
    const Roete = sequelize.define("roete", {
      
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
        
    },{
        tableName: "roetes"
    });
    /*
    Roete.hasMany(Load, {as: "loads"});
    Load.belongsTo(Roete, {
        foreignKey: "roeteId",
        as: "roete"
    });
    */
    return Roete;
   
  };

  //mark_id_fk
  //plek_id_fk
/*
  //roetes + loads
db.roetes.hasMany(db.loads, {as: "loads"});
db.loads.belongsTo(db.roetes, {
  foreignKey: "roeteId",
  as: "roete"
});
*/