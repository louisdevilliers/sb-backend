import express from "express";

// Import all individual route files
import boksRoutes from "./boks.routes.js";
import faktuurRoutes from "./faktuur.routes.js";
import kleurRoutes from "./kleur.routes.js";
import kultivarRoutes from "./kultivar.routes.js";
import loadRoutes from "./load.routes.js";
import markRoutes from "./mark.routes.js";
import paletRoutes from "./palet.routes.js";
import plekRoutes from "./plek.routes.js";
import produsentRoutes from "./produsent.routes.js";
import prysRoutes from "./prys.routes.js";
import roeteRoutes from "./roete.routes.js";
import stackRoutes from "./stack.routes.js";
import tipeRoutes from "./tipe.routes.js";
import transaksieRoutes from "./transaksie.routes.js";
import uitlaaiRoutes from "./uitlaai.routes.js";
import verkopeRoutes from "./verkope.routes.js";
import verpakkingRoutes from "./verpakking.routes.js";
import vervoerderRoutes from "./vervoerder.routes.js";
import vragRoutes from "./vrag.routes.js";
import weekRoutes from "./week.routes.js";

const router = express.Router();

router.use("/bokse", boksRoutes);
router.use("/faktuur", faktuurRoutes);
router.use("/kleur", kleurRoutes);
router.use("/kultivar", kultivarRoutes);
router.use("/loads", loadRoutes);
router.use("/mark", markRoutes);
router.use("/palet", paletRoutes);
router.use("/plek", plekRoutes);
router.use("/produsent", produsentRoutes);
router.use("/prys", prysRoutes);
router.use("/roete", roeteRoutes);
router.use("/stack", stackRoutes);
router.use("/tipe", tipeRoutes);
router.use("/transaksie", transaksieRoutes);
router.use("/uitlaai", uitlaaiRoutes);
router.use("/verkope", verkopeRoutes);
router.use("/verpakking", verpakkingRoutes);
router.use("/vervoerder", vervoerderRoutes);
router.use("/vrag", vragRoutes);
router.use("/week", weekRoutes);

export default router;
