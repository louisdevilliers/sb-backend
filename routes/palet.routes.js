module.exports = app => {
    const palette = require("../controllers/palet.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", palette.create);
    // Retrieve all Tutorials
    router.get("/", palette.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", palette.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", palette.findOne);
    // Update a Tutorial with id
    //router.put("/:id", palette.update);
    // Delete a Tutorial with id
    //router.delete("/:id", palette.delete);
    // Delete all Tutorials
    //router.delete("/", palette.deleteAll);
    app.use('/api/palette', router);
  };