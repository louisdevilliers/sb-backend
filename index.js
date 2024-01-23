// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
//import Router from "./routes/routes.js";


 
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
//app.use(Router);

import db from "./models/index.js";
//db.sequelize.sync();
db.sequelize.sync().then(() => { //{ force: true }
    console.log("Drop and re-sync db.");
  });

  require("./routes/turorial.routes")(app);
  require("./routes/kultivar.routes")(app);
  require("./routes/produsent.routes")(app);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));