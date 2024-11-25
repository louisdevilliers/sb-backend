import db from "../models/index.js"; 
const { pryse: Prys, Sequelize: { Op } } = db;


// Create and Save a new Faktuur
export const create = async (req, res) => {
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
export const findAll = async (req, res) => {
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
export const findOne = async (req, res) => {
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
