import db from "../models/index.js"; 
const { vragte: Vrag, Sequelize: { Op } } = db;

// Create and Save a new Vrag
export const create = async (req, res) => {
  // Validate request
  if (!req.body.qty) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Verpakking
  const vrag = {
    qty: req.body.qty,
    kultivarId: req.body.kultivarId,
    produsentId: req.body.produsentId,
    prysId: req.body.prysId,
    boksId: req.body.boksId,
    faktuurId: req.body.faktuurId,
    isConsumed: req.body.isConsumed
               
  };
  // Stack Verpakking in the database
  Vrag.create(vrag)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vrag."
      });
    });
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

exports.update = (req, res) => {
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
