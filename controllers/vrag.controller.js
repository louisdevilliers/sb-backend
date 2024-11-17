import db from "../models/index.js";
const {
  vragte: Vrag,
  Sequelize: { Op },
} = db;

// Create and Save a new Vrag
export const create = async (req, res) => {
  try {
    // Validate the request
    console.log("req.body", req.body);
    if (!req.body.faktuurNommer) {
      return res.status(400).send({
        message: "Must have faktuur nommer!",
      });
    }

    if (!req.body.vragte || !Array.isArray(req.body.vragte)) {
      return res.status(400).send({
        message: "Must have a valid 'vragte' array!",
      });
    }

    // Create entries for each vrag
    const faktuurNommer = req.body.faktuurNommer;
    const weekId = req.body.weekId;
    const vragte = req.body.vragte;

    // Build the vragte entries
    const vragteEntries = vragte.map((vrag) => ({
      qty: vrag.qty,
      kultivarId: vrag.kultivarId,
      produsentId: vrag.produsentId,
      boksId: vrag.boksId,
      faktuurNommer, // Attach faktuurNommer
      weekId, // Attach weekId if applicable
      isConsumed: false, // Default value or based on logic
    }));

    // Bulk insert the vragte entries
    const createdVragte = await Vrag.bulkCreate(vragteEntries);

    // Respond with the created entries
    return res.status(201).send({
      message: "Vragte created successfully!",
      data: createdVragte,
    });
  } catch (error) {
    console.error("Error creating vragte:", error);
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the vragte.",
    });
  }
};
// Retrieve all Verkopes from the database.
export const findAll = async (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Vrag.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Vrag.",
      });
    });
};
// Find a single Vrag with an id
export const findOne = async (req, res) => {
  const id = req.params.id;
  Vrag.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Vrag with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Vrag with id=" + id,
      });
    });
};
export const update = async (req, res) => {
  const id = req.params.id;
  Vrag.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vrag was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Vrag with id=${id}. Maybe Vrag was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Vrag with id=" + id,
      });
    });
};
