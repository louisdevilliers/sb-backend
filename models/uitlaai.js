export default (sequelize, Sequelize) => {
    const Uitlaai = sequelize.define("uitlaai", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      datum: {
        type: Sequelize.DATE
      }
      
    }, {
      tableName: "uitlaaie"
    });
    return Uitlaai;
  };

  //vervoerder_id_fk