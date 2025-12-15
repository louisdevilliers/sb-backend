import db from "../models/index.js";
const { palette: Palet, Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.nommer) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  // Create a Palet (Faktuur comment in original code seems copy-pasted, ignoring)
  try {
    const palet = await Palet.create({
      nommer: req.body.nommer,
      datum: new Date(),
      uitlaai: req.body.uitlaai,
    });

    const stacks = req.body.stacks || [];
    for (const stackItem of stacks) {
      const sourceStack = await db.stacks.findByPk(stackItem.id);
      if (!sourceStack) continue;

      const amountToStack = parseInt(stackItem.stacked);

      // If we are taking ALL boxes from the stack
      if (amountToStack >= sourceStack.nbokse) {
        sourceStack.paletId = palet.id;
        await sourceStack.save();
      } else {
        // Partial: Create a NEW stack for the palette with the consumed amount
        await db.stacks.create({
          nbokse: amountToStack,
          vragId: sourceStack.vragId,
          paletId: palet.id
        });

        // Decrement the source stack
        sourceStack.nbokse = sourceStack.nbokse - amountToStack;
        await sourceStack.save();
      }
    }

    res.send(palet);

  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Palet."
    });
  }

};
// Retrieve all Faktuurs from the database.
export const findAll = async (req, res) => {
  const nommer = req.query.nommer;
  var condition = nommer ? { nommer: { [Op.like]: `%${nommer}%` } } : null;
  Palet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Palet."
      });
    });
};
// Find a single Palet with an id
export const findOne = async (req, res) => {
  const id = req.params.id;
  Palet.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Palet with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Palet with id=" + id
      });
    });
};
