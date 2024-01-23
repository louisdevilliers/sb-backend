const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./models");

//db.sequelize.sync();
db.sequelize.sync().then(() => { //{ force: true }
  console.log("Drop and re-sync db.");
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


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});