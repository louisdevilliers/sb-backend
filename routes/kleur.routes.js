module.exports = app => {
    const kleure = require("../controllers/kleur.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", kleure.create);
    // Retrieve all Tutorials
    router.get("/", kleure.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", kleure.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", kleure.findOne);
    // Update a Tutorial with id
    //router.put("/:id", kleure.update);
    // Delete a Tutorial with id
    //router.delete("/:id", kleure.delete);
    // Delete all Tutorials
    //router.delete("/", kleure.deleteAll);
    app.use('/api/kleure', router);
  };