module.exports = app => {
    const plekke = require("../controllers/plek.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", plekke.create);
    // Retrieve all Tutorials
    router.get("/", plekke.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", plekke.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", plekke.findOne);
    // Update a Tutorial with id
    //router.put("/:id", plekke.update);
    // Delete a Tutorial with id
    //router.delete("/:id", plekke.delete);
    // Delete all Tutorials
    //router.delete("/", plekke.deleteAll);
    app.use('/api/plekke', router);
  };