import express from "express";
import dotenv from "dotenv";
import { conntecDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  conntecDB();
  console.log("server started at http://localhost:5000");
});
