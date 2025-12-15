import db from "../models/index.js";
const { vragte: Vrag, Sequelize: { Op } } = db;

// Create and Save a new Vrag
// Create and Save a new Vrag (Bulk with Faktuur)
export const create = async (req, res) => {
  // Validate request
  if (!req.body.faktuurNommer || !req.body.weekId || !req.body.vragte || req.body.vragte.length === 0) {
    res.status(400).send({
      message: "Content cannot be empty! (faktuurNommer, weekId, vragte)"
    });
    return;
  }

  const { faktuurNommer, weekId, vragte } = req.body;

  try {
    // 1. Create Faktuur
    // Assuming 'tipeId' should be determined or is default. creating "Ontvangs" invoices.
    // We will update the date to now.
    const faktuur = await db.fakture.create({
      nommer: faktuurNommer,
      datum: new Date(),
      tipeId: 1 // DR Aankope
    });

    const createdVragte = [];

    // 2. Iterate and Create Vragte
    for (const vragItem of vragte) {
      // 3. Lookup Prys
      // We need to find a price for this Kultivar in this Week
      const prys = await db.pryse.findOne({
        where: {
          weekId: weekId,
          kultivarId: vragItem.kultivarId
        }
      });

      // If no price found, we might want to default or error. 
      // For now, let's proceed with null prysId if not found, or log it.
      const prysId = prys ? prys.id : null;

      // 4. Create Vrag
      const newVrag = await Vrag.create({
        qty: vragItem.qty,
        kultivarId: vragItem.kultivarId,
        produsentId: vragItem.produsentId,
        boksId: vragItem.boksId,
        prysId: prysId,
        faktuurId: faktuur.id,
        isConsumed: true // Default
      });

      // Create Stack for this Vrag
      await db.stacks.create({
        nbokse: vragItem.qty,
        vragId: newVrag.id,
        paletId: null
      });

      createdVragte.push(newVrag);
    }

    res.send({
      message: "Faktuur and Vragte created successfully",
      faktuur: faktuur,
      vragte: createdVragte
    });

  } catch (err) {
    console.error("Error creating vragte batch:", err);
    res.status(500).send({
      message: err.message || "Some error occurred while creating the batch."
    });
  }
};
// Retrieve all Verkopes from the database.
export const findAll = async (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Vrag.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vrag."
      });
    });
};
// Find a single Vrag with an id
export const findOne = async (req, res) => {
  const id = req.params.id;
  Vrag.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Vrag with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Vrag with id=" + id
      });
    });
};
export const update = async (req, res) => {

  const id = req.params.id;
  Vrag.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vrag was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Vrag with id=${id}. Maybe Vrag was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vrag with id=" + id
      });
    });
}
