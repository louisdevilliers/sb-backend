import express from "express";
import {
  create,
  findAll,
  findOne,
  getAllVerpakkingsForDropdown
} from "../controllers/verpakking.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/list", getAllVerpakkingsForDropdown);
router.get("/:id", findOne);

export default function (app) {
  app.use("/api/verpakkings", router);
}
