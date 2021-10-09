const express = require("express");
const app = express();
//Parser

app.use(express.urlencoded({ extended: false }));
//Json
app.use(express.json());
//Router
const router = require("./Route/route");
app.use("/api/v1/crud", router);

// To block the Port
const cors = require("cors");
app.use(cors());

//db Setup
require("dotenv").config();
const connectDb = require("./Route/db/database");

const start = async () => {
  try {
    //   to pass the connection string to ConnectedDB we use Process.env.Mongo_Db
    await connectDb(process.env.Mongo_Db);
    app.listen(5000, console.log("Server is listening on port 5000..."));
  } catch (err) {
    console.log(err);
  }
};
start();
