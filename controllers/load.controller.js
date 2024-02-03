import db from "../models/index.js"; 
const { loads: Load, Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {  // Validate request
  if (!req.body.paletId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  const load = {
    roeteId: req.body.roeteId,
    paletId: req.body.paletId,
    uitlaaiId: req.body.uitlaaiId,
    
    
  };
  // Save Faktuur in the database
  Load.create(load)
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
export const findAll = async (req, res) => {
    const paletId = req.query.paletId;
    var condition = paletId ? { paletId: { [Op.like]: `%${paletId}%` } } : null;
    Load.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Load."
        });
      });
};
// Find a single Load with an id
export const findOne = async (req, res) => {
    const id = req.params.id;
    Load.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Load with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Load with id=" + id
        });
      });
};
