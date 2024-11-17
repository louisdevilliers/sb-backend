import express from "express";
import {
  create,
  findAll,
  findOne,
  getAllStacksForDropdown,
} from "../controllers/stack.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.get("/list", getAllStacksForDropdown);

export default router;
