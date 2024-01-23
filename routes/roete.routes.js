module.exports = app => {
    const roetes = require("../controllers/roete.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", roetes.create);
    // Retrieve all Tutorials
    router.get("/", roetes.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", roetes.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", roetes.findOne);
    // Update a Tutorial with id
    //router.put("/:id", roetes.update);
    // Delete a Tutorial with id
    //router.delete("/:id", roetes.delete);
    // Delete all Tutorials
    //router.delete("/", roetes.deleteAll);
    app.use('/api/roetes', router);
  };