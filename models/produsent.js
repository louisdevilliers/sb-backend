export default (sequelize, Sequelize) => {
    const Produsent = sequelize.define("produsent", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      naam: {
        type: Sequelize.STRING(45)
      },
      kode: {
        type: Sequelize.STRING(3)
      }
    }, {
      tableName: "produsente"
    });
    return Produsent;
  };