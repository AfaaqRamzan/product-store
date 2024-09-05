import express from "express";
import dotenv from "dotenv";
import { conntecDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

//middle ware that allow us to accept JSON data in the req.body
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  conntecDB();
  console.log("server started at http://localhost:5000");
});
