module.exports = app => {
    const vervoerders = require("../controllers/vervoerder.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", vervoerders.create);
    // Retrieve all Tutorials
    router.get("/", vervoerders.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", vervoerders.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", vervoerders.findOne);
    // Update a Tutorial with id
    //router.put("/:id", vervoerders.update);
    // Delete a Tutorial with id
    //router.delete("/:id", vervoerders.delete);
    // Delete all Tutorials
    //router.delete("/", vervoerders.deleteAll);
    app.use('/api/vervoerders', router);
  };