module.exports = app => {
    const produsente = require("../controllers/produsent.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", produsente.create);
    // Retrieve all Tutorials
    router.get("/", produsente.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", kultivars.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", kultivars.findOne);
    // Update a Tutorial with id
    //router.put("/:id", kultivars.update);
    // Delete a Tutorial with id
    //router.delete("/:id", kultivars.delete);
    // Delete all Tutorials
    //router.delete("/", kultivars.deleteAll);
    app.use('/api/produsente', router);
  };