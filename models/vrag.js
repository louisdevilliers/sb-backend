export default (sequelize, Sequelize) => {
    const Vrag = sequelize.define("vrag", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      qty: {
        type: Sequelize.INTEGER
      },
      faktuurId: {
        type: Sequelize.INTEGER
      },
      isConsumed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
      
    }, {
      tableName: "vragte"
    });
    return Vrag;
  };

  //produsent_id_fk
  //kultivar_id_fk
  //boks_id_fk
  //prys_id_fk