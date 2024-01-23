module.exports = app => {
    const verpakkings = require("../controllers/verpakking.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", verpakkings.create);
    // Retrieve all Tutorials
    router.get("/", verpakkings.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", verpakkings.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", verpakkings.findOne);
    // Update a Tutorial with id
    //router.put("/:id", verpakkings.update);
    // Delete a Tutorial with id
    //router.delete("/:id", verpakkings.delete);
    // Delete all Tutorials
    //router.delete("/", verpakkings.deleteAll);
    app.use('/api/verpakkings', router);
  };