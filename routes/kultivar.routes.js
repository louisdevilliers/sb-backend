  // Import express and the controller functions
import express from 'express';
import { create, findAll, findOne } from '../controllers/kultivar.controller.js';

const router = express.Router();

// Setup routes
router.post("/", create);          // Create a new Kleur
router.get("/", findAll);          // Retrieve all Kleure
router.get("/:id", findOne);       // Retrieve a single Kleur with id

// Export a function to use these routes in the main app
export default function(app) {
    app.use('/api/kultivars', router);
}
