//const db = require("../models");
//const Boks = db.bokse;
//const Op = db.Sequelize.Op;
import db from "../models/index.js"; // Adjust this path as necessary
const { bokse: Boks, Sequelize: { Op } } = db;

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
  const boks = {
    naam: req.body.naam,
    grootte: req.body.grootte,
    kode: req.body.kode,
    brand: req.body.brand,
    
  };
  // Save Tutorial in the database
  Boks.create(boks)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Boks."
      });
    });
};
// Retrieve all Tutorials from the database.
export const findAll = async (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
    Boks.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving kleur."
        });
      });
};
// Find a single Tutorial with an id
export const findOne = async (req, res) => {
    const id = req.params.id; //boksId
    Boks.findByPk(id)
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
