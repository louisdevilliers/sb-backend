module.exports = app => {
    const loads = require("../controllers/load.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", loads.create);
    // Retrieve all Tutorials
    router.get("/", loads.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", loads.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", loads.findOne);
    // Update a Tutorial with id
    //router.put("/:id", loads.update);
    // Delete a Tutorial with id
    //router.delete("/:id", loads.delete);
    // Delete all Tutorials
    //router.delete("/", loads.deleteAll);
    app.use('/api/loads', router);
  };