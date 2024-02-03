import db from "../models/index.js"; 
const { palette: Palet, Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.nommer) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  const palet = {
    nommer: req.body.nommer,
    datum: req.body.datum,
    uitlaai: req.body.uitlaai,

    
  };
  // Save Faktuur in the database
  Palet.create(palet)
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
    const nommer = req.query.nommer;
    var condition = nommer ? { nommer: { [Op.like]: `%${nommer}%` } } : null;
    Palet.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Palet."
        });
      });
};
// Find a single Palet with an id
export const findOne = async (req, res) => {
    const id = req.params.id;
    Palet.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Palet with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Palet with id=" + id
        });
      });
};
