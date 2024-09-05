import express from "express";
import dotenv from "dotenv";
import { conntecDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

//middle ware that allow us to accept JSON data in the req.body
app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: false, data: newProduct });
  } catch (error) {
    console.log("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(5000, () => {
  conntecDB();
  console.log("server started at http://localhost:5000");
});
