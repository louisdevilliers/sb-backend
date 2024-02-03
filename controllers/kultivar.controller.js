import db from "../models/index.js"; 
const { kultivars: Kultivar, Sequelize: { Op } } = db;

// Create and Save a new Tutorial
export const create = async (req, res) => {
  // Validate request
  if (!req.body.naam) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const kultivar = {
    naam: req.body.naam,
    kode: req.body.kode,
    kleurId: req.body.kleurId,
  };
  // Save Tutorial in the database
  Kultivar.create(kultivar)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Retrieve all Tutorials from the database.
export const findAll = async (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
    Kultivar.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving kultivars."
        });
      });
};

// Retrieve all Tutorials from the database.
export const findAllByKleur = async (req, res) => {
  console.log("controller called")
  const kleurId = req.query.kleurId;
    const condition = kleurId ? { kleurId: { [Op.like]: `%${kleurId}%` } } : null;
    Kultivar.findAll({ where: condition })
      .then(data => {
        res.send(data);
        //console.log("controller called")
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving kultivars."
        });
      });
};
// Find a single kultivar with an id
export const findOne = async (req, res) => {
    const id = req.params.kultivarId;
    Kultivar.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};
