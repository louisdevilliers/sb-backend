module.exports = app => {
    const vragte = require("../controllers/vrag.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", vragte.create);
    // Retrieve all Tutorials
    router.get("/", vragte.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", vragte.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", vragte.findOne);
    // Update a Tutorial with id
    router.put("/:id", vragte.update);
    // Delete a Tutorial with id
    //router.delete("/:id", vragte.delete);
    // Delete all Tutorials
    //router.delete("/", vragte.deleteAll);
    app.use('/api/vragte', router);
  };