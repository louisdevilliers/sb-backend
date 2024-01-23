module.exports = app => {
    const verkopes = require("../controllers/verkope.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", verkopes.create);
    // Retrieve all Tutorials
    router.get("/", verkopes.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", verkopes.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", verkopes.findOne);
    // Update a Tutorial with id
    //router.put("/:id", verkopes.update);
    // Delete a Tutorial with id
    //router.delete("/:id", verkopes.delete);
    // Delete all Tutorials
    //router.delete("/", verkopes.deleteAll);
    app.use('/api/verkopes', router);
  };