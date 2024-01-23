const db = require("../models");
const Transaksie = db.transaksies;
const Op = db.Sequelize.Op;

// Create and Save a new Faktuur
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nbokse) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  const transaksie = {
    nbokse: req.body.nbokse,
    stackId: req.body.stackId,
    faktuurId: req.body.faktuurId,
    
         
  };
  // Stack Faktuur in the database
  Transaksie.create(transaksie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Faktuur."
      });
    });
};
// Retrieve all Faktuurs from the database.
exports.findAll = (req, res) => {
    const nbokse = req.query.nbokse;
    var condition = nbokse ? { nbokse: { [Op.like]: `%${nbokse}%` } } : null;
    Transaksie.findAll({ where: condition})
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
exports.findOne = (req, res) => {
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
