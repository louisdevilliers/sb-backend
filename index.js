// import express
import express from "express";
// import cors
import cors from "cors";
// import routes

import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(cors());

import db from "./models/index.js";
//db.sequelize.sync();
db.sequelize.sync().then(() => {
  //{ force: true }
  console.log("Drop and re-sync db.");
});

app.use("/api", routes);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
