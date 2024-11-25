import db from "../models/index.js";
const {
  weke: Week,
  Sequelize: { Op },
} = db;

// Create and Save a new Tutorial
export const create = async (req, res) => {
  // Validate request
  if (!req.body.nommer) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const week = {
    nommer: req.body.nommer,
    letter: req.body.letter,
  };
  // Save Tutorial in the database
  Week.create(week)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
// Retrieve all Tutorials from the database.
export const findAll = async (req, res) => {
  const nommer = req.query.nommer;
  var condition = nommer ? { nommer: { [Op.like]: `%${nommer}%` } } : null;
  Week.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produsente.",
      });
    });
};
// Find a single Tutorial with an id
export const findOne = async (req, res) => {
  const id = req.params.id;
  Week.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Week with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Week with id=" + id + err.message,
      });
    });
};

//

export const getAllWekeForDropdown = async (req, res, next) => {
  try {
    console.log("get all weke for dropdown called");
    const wekeList = await Week.findAll({
      attributes: ["id", "nommer", "letter"],
    });
    res.json(wekeList);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching weke", error: error.toString() });
  }
};
