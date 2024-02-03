import db from "../models/index.js"; 
const { kleure: Kleur, Sequelize: { Op } } = db;

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
  const kleur = {
    naam: req.body.naam,
    kode: req.body.kode,
    
  };
  // Save Tutorial in the database
  Kleur.create(kleur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kleur."
      });
    });
};
// Retrieve all Tutorials from the database.
export const findAll = async (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
    Kleur.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving kleur."
        });
      });
};
// Find a single Tutorial with an id
export const findOne = async (req, res) => {
    const id = req.params.id;
    Kleur.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find kleur with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving kleur with id=" + id
        });
      });
};
