module.exports = app => {
    const stacks = require("../controllers/stack.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", stacks.create);
    // Retrieve all Tutorials
    router.get("/", stacks.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", stacks.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", stacks.findOne);
    // Update a Tutorial with id
    router.put("/:id", stacks.update);
    // Delete a Tutorial with id
    //router.delete("/:id", stacks.delete);
    // Delete all Tutorials
    //router.delete("/", stacks.deleteAll);
    app.use('/api/stacks', router);
  };