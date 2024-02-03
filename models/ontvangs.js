export default (sequelize, Sequelize) => {
    const Ontvangs = sequelize.define("ontvangs", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
     
    },{
        tableName: "ontvangstes"
    });
    return Ontvangs;
  };

  //faktuur_id_fk
  //vrag_id_fk
  //verkope_id_fk