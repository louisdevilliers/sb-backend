//const express = require("express");
import express from "express";
import cors from "cors"
import kultivarRoutes from './routes/kultivar.routes.js';
import produsentRoutes from './routes/produsent.routes.js';
import kleurRoutes from './routes/kleur.routes.js';
import weekRoutes from './routes/week.routes.js';
import boksRoutes from './routes/boks.routes.js';
import tipeRoutes from './routes/tipe.routes.js';
import faktuurRoutes from './routes/faktuur.routes.js';
import transaksieRoutes from './routes/transaksie.routes.js';
import verpakkingRoutes from './routes/verpakking.routes.js';
import verkopeRoutes from './routes/verkope.routes.js';
import vervoerderRoutes from './routes/vervoerder.routes.js';
import prysRoutes from './routes/prys.routes.js';
import plekRoutes from './routes/plek.routes.js';
import markRoutes from './routes/mark.routes.js';
import loadRoutes from './routes/load.routes.js';
import stackRoutes from './routes/stack.routes.js';
import vragRoutes from './routes/vrag.routes.js';
import paletRoutes from './routes/palet.routes.js';
import roeteRoutes from './routes/roete.routes.js';
import uitlaaiRoutes from './routes/uitlaai.routes.js';


// const bodyParser = require("body-parser"); /* deprecated */
//const cors = require("cors");

const app = express();
/*
var corsOptions = {
  origin: "http://localhost:3000"
};
*/
//app.use(cors(corsOptions));
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

//const db = require("./models");
//db import:
import db from './models/index.js';


kultivarRoutes(app);
produsentRoutes(app);
kleurRoutes(app);
weekRoutes(app);
boksRoutes(app);
tipeRoutes(app);
faktuurRoutes(app);
transaksieRoutes(app);
verpakkingRoutes(app);
verkopeRoutes(app);
vervoerderRoutes(app);
prysRoutes(app);
plekRoutes(app);
markRoutes(app);
loadRoutes(app);
stackRoutes(app);
vragRoutes(app);
paletRoutes(app);
roeteRoutes(app);
uitlaaiRoutes(app);

//db.sequelize.sync();
db.sequelize.sync({ alter: true }).then(() => {
  console.log("db sync.");
});
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to bezkoder application." });
//});

//require("./routes/tutorial.routes.js")(app);
/*
require("./routes/kultivar.routes.js")(app);
require("./routes/produsent.routes.js")(app);
require("./routes/kleur.routes.js")(app);
require("./routes/week.routes.js")(app);
require("./routes/boks.routes.js")(app);
require("./routes/tipe.routes.js")(app);
require("./routes/faktuur.routes.js")(app);
require("./routes/transaksie.routes.js")(app);
require("./routes/verpakking.routes.js")(app);
require("./routes/verkope.routes.js")(app);
require("./routes/vervoerder.routes.js")(app);
require("./routes/prys.routes.js")(app);
require("./routes/plek.routes.js")(app);
require("./routes/mark.routes.js")(app);
require("./routes/load.routes.js")(app);
require("./routes/stack.routes.js")(app);
require("./routes/vrag.routes.js")(app);
require("./routes/palet.routes.js")(app);
require("./routes/roete.routes.js")(app);
require("./routes/uitlaai.routes.js")(app);
*/




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});