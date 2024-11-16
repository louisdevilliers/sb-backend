import express from "express";
import { create, findAll, findOne } from "../controllers/week.controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);

export default router;
