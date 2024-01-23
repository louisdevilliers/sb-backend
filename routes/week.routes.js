module.exports = app => {
    const weke = require("../controllers/week.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", weke.create);
    // Retrieve all Tutorials
    router.get("/", weke.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", weke.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", weke.findOne);
    // Update a Tutorial with id
    //router.put("/:id", weke.update);
    // Delete a Tutorial with id
    //router.delete("/:id", weke.delete);
    // Delete all Tutorials
    //router.delete("/", weke.deleteAll);
    app.use('/api/weke', router);
  };