import express from "express";
import { create, findAll, findOne, getAllPlekkeForDropdown } from "../controllers/plek.controller.js";

const router = express.Router();

router.post("/", create);
///router.get("/", findAll);
router.get("/list", getAllPlekkeForDropdown);   
router.get("/:id", findOne);

export default function (app) {
  app.use("/api/plekke", router);
}
