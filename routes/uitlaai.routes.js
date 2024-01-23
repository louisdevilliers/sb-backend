module.exports = app => {
    const uitlaaie = require("../controllers/uitlaai.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", uitlaaie.create);
    // Retrieve all Tutorials
    router.get("/", uitlaaie.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", uitlaaie.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", uitlaaie.findOne);
    // Update a Tutorial with id
    //router.put("/:id", uitlaaie.update);
    // Delete a Tutorial with id
    //router.delete("/:id", uitlaaie.delete);
    // Delete all Tutorials
    //router.delete("/", uitlaaie.deleteAll);
    app.use('/api/uitlaaie', router);
  };