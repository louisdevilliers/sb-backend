export default (sequelize, Sequelize) => {
    const Kleur = sequelize.define("kleur", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      naam: {
        type: Sequelize.STRING(25)
      },
      kode: {
        type: Sequelize.STRING(3)
      }
      
    }, {
      tableName: "kleure"
    });

    

    return Kleur;
  };