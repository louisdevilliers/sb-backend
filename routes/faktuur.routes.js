module.exports = app => {
    const fakture = require("../controllers/faktuur.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", fakture.create);
    // Retrieve all Tutorials
    router.get("/", fakture.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", fakture.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", fakture.findOne);
    // Update a Tutorial with id
    //router.put("/:id", fakture.update);
    // Delete a Tutorial with id
    //router.delete("/:id", fakture.delete);
    // Delete all Tutorials
    //router.delete("/", fakture.deleteAll);
    app.use('/api/fakture', router);
  };