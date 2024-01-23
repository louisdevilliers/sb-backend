module.exports = app => {
    const transaksies = require("../controllers/transaksie.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", transaksies.create);
    // Retrieve all Tutorials
    router.get("/", transaksies.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", transaksies.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", transaksies.findOne);
    // Update a Tutorial with id
    //router.put("/:id", transaksies.update);
    // Delete a Tutorial with id
    //router.delete("/:id", transaksies.delete);
    // Delete all Tutorials
    //router.delete("/", transaksies.deleteAll);
    app.use('/api/transaksies', router);
  };