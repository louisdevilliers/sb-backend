import express from "express";
import {
  create,
  findAll,
  findOne,
  getAllPlekkeForDropdown,
} from "../controllers/plek.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.get("/list", getAllPlekkeForDropdown);

export default router;
