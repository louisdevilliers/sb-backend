/*
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
  */
 // Import express and the controller functions
import express from 'express';
import { create, findAll, findOne} from '../controllers/faktuur.controller.js';

const router = express.Router();

// Setup routes
router.post("/", create);
router.get("/", findAll);
// Uncomment as needed
// router.get("/published", findAllPublished);
router.get("/:id", findOne);
//router.put("/:id", update);
//router.delete("/:id", deleteOne);
//router.delete("/", deleteAll);

// Export a function to use these routes in the main app
export default function(app) {
    app.use('/api/fakture', router);
}
