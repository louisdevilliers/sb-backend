export default (sequelize, Sequelize) => {
    const Load = sequelize.define("load", {
      
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        roeteId: {
            type: Sequelize.INTEGER,
            referemces: {
                model: "roetes",
                key: "id"
            }
        }
    });
    return Load;
  };

  //palet_id_fk
  //roete_id_fk
  //uitlaai_id_fk