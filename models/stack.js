export default (sequelize, Sequelize) => {
  const Stack = sequelize.define("stack", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nbokse: {
      type: Sequelize.INTEGER,
    },
  });
  return Stack;
};

//vrag_id_fk
//palet_id_fk

//add vragId foreign key -> aal stacks have been vragte, should maintain that ref
// sum of stacks.nbokse = vrag.qty for vrag.isConsumed
