import db from "../models/index.js"; 
const { tipes: Tipe, Sequelize: { Op } } = db;


// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.tipe) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  const tipe = {
    tipe: req.body.tipe,
    
         
  };
  // Stack Faktuur in the database
  Tipe.create(tipe)
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
    const tipe = req.query.tipe;
    var condition = tipe ? { tipe: { [Op.like]: `%${tipe}%` } } : null;
    Tipe.findAll({ where: condition })
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
export const findOne = async (req, res) => {
    const id = req.params.id;
    Tipe.findByPk(id)
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
