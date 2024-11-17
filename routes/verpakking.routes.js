import express from "express";
import {
  create,
  findAll,
  findOne,
  getAllVerpakkingsForDropdown,
} from "../controllers/verpakking.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.get("/list", getAllVerpakkingsForDropdown);

export default router;
