module.exports = app => {
    const kultivars = require("../controllers/kultivar.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", kultivars.create);
    // Retrieve all Tutorials
    router.get("/", kultivars.findAllByKleur);
    router.get("/", kultivars.findAll);
    
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
    app.use('/api/kultivars', router);
  };