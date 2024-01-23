const db = require("../models");
const Verkope = db.verkopes;
const Op = db.Sequelize.Op;

// Create and Save a new Verkope
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qty) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Verkope
  const verkope = {
    qty: req.body.qty,
    verpakkingId: req.body.verpakkingId,
    produsentId: req.body.produsentId,
    faktuurId: req.body.faktuurId,
    
         
  };
  // Stack Verkope in the database
  Verkope.create(verkope)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Verkope."
      });
    });
};
// Retrieve all Verkopes from the database.
exports.findAll = (req, res) => {
    const qty = req.query.qty;
    var condition = qty ? { qty: { [Op.like]: `%${qty}%` } } : null;
    Verkope.findAll({ where: condition })
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
    Verkope.findByPk(id)
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
