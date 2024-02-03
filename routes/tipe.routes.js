import express from "express";
import { create, findAll, findOne } from "../controllers/tipe.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);

export default function (app) {
  app.use("/api/tipes", router);
}