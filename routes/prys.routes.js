module.exports = app => {
    const pryse = require("../controllers/prys.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", pryse.create);
    // Retrieve all Tutorials
    router.get("/", pryse.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", pryse.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", pryse.findOne);
    // Update a Tutorial with id
    //router.put("/:id", pryse.update);
    // Delete a Tutorial with id
    router.delete("/:id", pryse.delete);
    // Delete all Tutorials
    //router.delete("/", pryse.deleteAll);
    app.use('/api/pryse', router);
  };