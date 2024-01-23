const db = require("../models");
const Stack = db.stacks;
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
  const stack = {
    nbokse: req.body.nbokse,
    vragId: req.body.vragId,
    paletId: req.body.paletId,
         
  };
  // Stack Faktuur in the database
  Stack.create(stack)
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
    Stack.findAll({ where: condition })
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
    Stack.findByPk(id)
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

exports.update = (req, res) => {
  const id = req.params.id;
  Stack.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stack was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stack with id=${id}. Maybe Stack was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stack with id=" + id
      });
    });
  }