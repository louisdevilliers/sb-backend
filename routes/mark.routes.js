module.exports = app => {
    const markte = require("../controllers/mark.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", markte.create);
    // Retrieve all Tutorials
    router.get("/", markte.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", markte.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", markte.findOne);
    // Update a Tutorial with id
    //router.put("/:id", markte.update);
    // Delete a Tutorial with id
    //router.delete("/:id", markte.delete);
    // Delete all Tutorials
    //router.delete("/", markte.deleteAll);
    app.use('/api/markte', router);
  };