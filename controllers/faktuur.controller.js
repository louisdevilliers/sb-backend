import db from "../models/index.js";
const {
  fakture: Faktuur,
  Sequelize: { Op },
} = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.nommer) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Faktuur
  const faktuur = {
    datum: req.body.datum,
    nommer: req.body.nommer,
    tipeId: req.body.tipeId,
  };
  // Save Faktuur in the database
  Faktuur.create(faktuur)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Faktuur.",
      });
    });
};
// Retrieve all Faktuurs from the database.
export const findAll = async (req, res) => {
  const nommer = req.query.nommer;
  var condition = nommer ? { nommer: { [Op.like]: `%${nommer}%` } } : null;
  Faktuur.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving faktuur.",
      });
    });
};

export const findOne = async (req, res) => {
  const id = req.params.id;
  Faktuur.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Faktuur with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Faktuur with id=" + id,
      });
    });
};
