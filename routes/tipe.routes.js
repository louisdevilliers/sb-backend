module.exports = app => {
    const tipes = require("../controllers/tipe.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tipes.create);
    // Retrieve all Tutorials
    router.get("/", tipes.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", tipes.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", tipes.findOne);
    // Update a Tutorial with id
    //router.put("/:id", tipes.update);
    // Delete a Tutorial with id
    //router.delete("/:id", tipes.delete);
    // Delete all Tutorials
    //router.delete("/", tipes.deleteAll);
    app.use('/api/tipes', router);
  };