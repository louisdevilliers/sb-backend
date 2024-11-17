import db from "../models/index.js"; 
const { stacks: Stack,Vrag, Produsent, Kultivar, Boks,  Sequelize: { Op } } = db;

// Create and Save a new Faktuur
export const create = async (req, res) => {
  // Validate request
  if (!req.body.nbokse) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Faktuur
  const stack = {
    nbokse: req.body.nbokse,
    vragId: req.body.vragId,
    paletId: req.body.paletId,
         
  };
  // Stack Faktuur in the database
  Stack.create(stack)
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
    const nbokse = req.query.nbokse;
    var condition = nbokse ? { nbokse: { [Op.like]: `%${nbokse}%` } } : null;
    Stack.findAll({ where: condition })
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
    Stack.findByPk(id)
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
export const update = async (req, res) => {
  const id = req.params.id;
  Stack.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stack was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stack with id=${id}. Maybe Stack was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stack with id=" + id
      });
    });
  }

  //
 

  export const getAllStacksForDropdown = async (req, res, next) => {
    try {
      console.log('getAllStacksForDropdown triggered');
      const stacksList = await Stack.findAll({
        attributes: ['id', 'nbokse'],
        
        include: [
          {
            model: db.vragte, 
            as: 'vrag',
            attributes: ['id'],
            include: [
              {
                model: db.produsente,
                 as: 'produsent',
                attributes: ['naam'],
              },
              {
                model: db.kultivars,
                as: 'kultivar',
                attributes: ['naam'],
              },
              {
                model: db.bokse,
                as: 'boks',
                attributes: ['kode'],
              }
            ],
           
          },
        ],
        
        where: { paletId: { [Op.is]: null } },
      });
      console.log('stacksList', stacksList);
      const formattedStacks = stacksList.map(stack => ({
        id: stack.id,
        nbokse: stack.nbokse,
        produsent: stack.vrag.produsent.naam,
        kultivar: stack.vrag.kultivar.naam,
        boks: stack.vrag.boks.kode,
      }));
  
      // The result will be an array of stack objects, each with nested objects for related data.
      console.log("formattedStacks", formattedStacks);
      res.json(formattedStacks);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching stacks', error: error.toString() });
    }
  };

  //add controller to be called form transaksies to check if there are sufficient boxes on stack, then unstacks boxes from stack