import db from "../models/index.js"; 
const { plekke: Plek, Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.naam) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  const plek = {
    naam: req.body.naam,
    

    
  };
  // Save Faktuur in the database
  Plek.create(plek)
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
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
    Plek.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Plek."
        });
      });
};
// Find a single Plek with an id
export const findOne = async (req, res) => {
    const id = req.params.id;
    Plek.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Plek with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Plek with id=" + id
        });
      });
};

//

export const getAllPlekkeForDropdown = async (req, res, next) => {
  try {
    const plekkeList = await Plek.findAll({
      attributes: ['id', 'naam'] 
    });
    console.log("plekkeList",plekkeList);
    res.json(plekkeList);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching plekke', error: error.toString() });
  }
};