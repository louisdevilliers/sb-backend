export default (sequelize, Sequelize) => {
    const Kultivar = sequelize.define("kultivar", {
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
      
    });
    return Kultivar;
  };
  //kleur_id_fk