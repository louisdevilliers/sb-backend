import db from "../models/index.js";
const { transaksies: Transaksie, Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.datum || !req.body.nommer || !req.body.items || req.body.items.length === 0) {
    res.status(400).send({
      message: "Content can not be empty! (datum, nommer, items)"
    });
    return;
  }

  try {
    // 1. Create Faktuur (Type 3 = DR Verkope)
    const faktuur = await db.fakture.create({
      datum: req.body.datum,
      nommer: req.body.nommer,
      tipeId: 3 // DR Verkope
    });

    const items = req.body.items; // Array of { stackId, qty }

    for (const item of items) {
      const qtyToSell = parseInt(item.qty);
      const sourceStackId = item.stackId;

      // 2. Fetch Source Stack
      const sourceStack = await db.stacks.findByPk(sourceStackId);
      if (!sourceStack) throw new Error(`Stack ${sourceStackId} not found`);

      if (sourceStack.nbokse < qtyToSell) {
        throw new Error(`Stack ${sourceStackId} has insufficient boxes (${sourceStack.nbokse}) for sale of ${qtyToSell}`);
      }

      // 3. Create NEW "Sold" Stack
      // This stack represents the boxes that are now "Sold" (not on floor, not on pallet, but on invoice)
      // It retains the origin vragId, but gets the new faktuurId.
      const soldStack = await db.stacks.create({
        nbokse: qtyToSell,
        vragId: sourceStack.vragId,
        paletId: null, // Not on a pallet (or conceptually "sold off floor")
        faktuurId: faktuur.id
      });

      // 4. Update Source Stack
      // Remove the sold boxes from the original stack
      sourceStack.nbokse = sourceStack.nbokse - qtyToSell;
      await sourceStack.save();

      // 5. Create Transaksie Record
      await Transaksie.create({
        nbokse: qtyToSell,
        stackId: soldStack.id, // Link to the NEW sold stack ? Or the transaction event itself.
        faktuurId: faktuur.id
      });
    }

    res.send({
      message: "Transaksie created successfully",
      faktuur: faktuur
    });

  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while processing the Transaksie."
    });
  }
};
// Retrieve all Faktuurs from the database.
export const findAll = async (req, res) => {
  const nbokse = req.query.nbokse;
  var condition = nbokse ? { nbokse: { [Op.like]: `%${nbokse}%` } } : null;
  Transaksie.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Roete."
      });
    });
};
// Find a single Prys with an id
export const findOne = async (req, res) => {
  const id = req.params.id;
  Transaksie.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Prys with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Prys with id=" + id
      });
    });
};
