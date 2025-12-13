
  import express from "express";
import { create, findAll, findOne, getAllWekeForDropdown } from "../controllers/week.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/list", getAllWekeForDropdown);
//router.get("/:id", findOne);

export default function (app) {
  app.use("/api/weke", router);
}
