import express from "express";
import {
  create,
  findAll,
  findOne,
  getAllProdusenteForDropdown
} from "../controllers/produsent.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/list", getAllProdusenteForDropdown);
//router.get("/:id", findOne);

export default function (app) {
  app.use("/api/produsente", router);
}
