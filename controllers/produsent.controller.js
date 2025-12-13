import db from "../models/index.js"; 
const { produsente: Produsent, Sequelize: { Op } } = db;

// Create and Save a new Tutorial
export const create = async (req, res) => {
  // Validate request
  if (!req.body.naam) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const produsent = {
    naam: req.body.naam,
    kode: req.body.kode,
    
  };
  // Save Tutorial in the database
  Produsent.create(produsent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Retrieve all Tutorials from the database.
export const findAll = async (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
    Produsent.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving produsente."
        });
      });
};
// Find a single Tutorial with an id
export const findOne = async (req, res) => {
    const id = req.params.id;
    Produsent.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

//

export const getAllProdusenteForDropdown = async (req, res, next) => {
  try {
    const produsenteList = await Produsent.findAll({
      attributes: ['id', 'naam'] 
    });
    console.log("produsenteList",produsenteList);
    res.json(produsenteList);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching produsente', error: error.toString() });
  }
};