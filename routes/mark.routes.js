import express from 'express';
import { create, findAll, findOne, getAllMarkteForDropdown } from '../controllers/mark.controller.js';

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/list", getAllMarkteForDropdown);
router.get("/:id", findOne);

export default function (app) {
    app.use('/api/markte', router);
}