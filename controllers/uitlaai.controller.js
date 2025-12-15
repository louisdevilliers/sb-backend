import db from "../models/index.js";
const { uitlaaie: Uitlaai, Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.datum || !req.body.vervoerderId) {
    res.status(400).send({
      message: "Content can not be empty! (datum, vervoerderId)"
    });
    return;
  }

  try {
    // 1. Create Uitlaai
    const uitlaai = await Uitlaai.create({
      datum: req.body.datum,
      vervoerderId: req.body.vervoerderId
    });

    const loadsData = req.body.loads || []; // Expecting array of { roeteId, paletIds: [] }

    // 2. Create Loads and Update Palette
    for (const line of loadsData) {
      const roeteId = line.roeteId;
      const paletIds = line.paletIds || [];

      for (const paletId of paletIds) {
        // Create Load record
        await db.loads.create({
          uitlaaiId: uitlaai.id,
          roeteId: roeteId,
          paletId: paletId
        });

        // Update Palet status
        await db.palette.update(
          { uitlaai: true },
          { where: { id: paletId } }
        );
      }
    }

    res.send({
      message: "Uitlaai and Loads created successfully",
      uitlaai: uitlaai
    });

  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Uitlaai batch."
    });
  }
};
// Retrieve all Faktuurs from the database.
export const findAll = async (req, res) => {
  const datum = req.query.datum;
  var condition = datum ? { datum: { [Op.like]: `%${datum}%` } } : null;
  Uitlaai.findAll({ where: condition })
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
  Uitlaai.findByPk(id)
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
