const db = require("../models");
const Prys = db.pryse;
const Op = db.Sequelize.Op;

// Create and Save a new Faktuur
exports.create = (req, res) => {
  // Validate request
  if (!req.body.prys) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  // Create a prys
  const prys = {
    prys: req.body.prys,
    weekId: req.body.weekId,
    kultivarId: req.body.kultivarId,
        
  };
  // Save Faktuur in the database
  Prys.create(prys)
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
    const prys = req.query.prys;
    var condition = prys ? { prys: { [Op.like]: `%${prys}%` } } : null;
    Prys.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Prys."
        });
      });
};
// Find a single Prys with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Prys.findByPk(id)
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

exports.delete = (req, res) => {
  const id = req.params.id;
  Prys.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prys was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Prys with id=${id}. Maybe Prys was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Prys with id=" + id
      });
    });
};
