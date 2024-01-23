module.exports = (sequelize, Sequelize) => {
    const Faktuur = sequelize.define("faktuur", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
      datum: {
        type: Sequelize.DATE
      },
      nommer: {
        type: Sequelize.STRING(16)
      }
      
    },{
      tableName: "fakture"
    });
    return Faktuur;
  };

  //tipe_id_fk
