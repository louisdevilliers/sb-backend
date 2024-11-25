import db from "../models/index.js"; 
const { verpakkings: Verpakking, Sequelize: { Op } } = db;

// Create and Save a new Verpakking
export const create = async (req, res) => {
  // Validate request
  if (!req.body.naam) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Verpakking
  const verpakking = {
    naam: req.body.naam,
    prys: req.body.prys,
           
  };
  // Stack Verpakking in the database
  Verpakking.create(verpakking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Verpakking."
      });
    });
};
// Retrieve all Verkopes from the database.
export const findAll = async (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
    Verpakking.findAll({ where: condition })
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
    Verpakking.findByPk(id)
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

//
export const getAllVerpakkingsForDropdown = async (req, res, next) => {
  try {
    const verpakkingsList = await Verpakking.findAll({
      attributes: ['id', 'naam', 'prys'] 
    });
    console.log("verpakkingsList",verpakkingsList);
    res.json(verpakkingsList);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching verpakkings', error: error.toString() });
  }
};