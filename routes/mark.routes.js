import express from "express";
import {
  create,
  findAll,
  findOne,
  getAllMarkteForDropdown,
} from "../controllers/mark.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.get("/list", getAllMarkteForDropdown);

export default router;
