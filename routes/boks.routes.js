/*
module.exports = app => {
    const bokse = require("../controllers/boks.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", bokse.create);
    // Retrieve all Tutorials
    router.get("/", bokse.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", bokse.findAllPublished);
    // Retrieve a single Tutorial with id
    //router.get("/:id", bokse.findOne);
    // Update a Tutorial with id
    //router.put("/:id", bokse.update);
    // Delete a Tutorial with id
    //router.delete("/:id", bokse.delete);
    // Delete all Tutorials
    //router.delete("/", bokse.deleteAll);
    app.use('/api/bokse', router);
  };
  */
  import { create, findAll, findOne }from '../controllers/boks.controller.js';
  import express from 'express';
  const router = express.Router();
  
  // Create a new Boks
  router.post("/", create);
  
  // Retrieve all Bokse
  router.get("/", findAll);
  router.get("/:id", findOne);
  
  // Other routes can be commented or uncommented as needed
  
  export default function(app) {
      app.use('/api/bokse', router);
  }
  