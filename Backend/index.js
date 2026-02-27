// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const heroRoutes = require("./routes/heroRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder for product images
app.use("/products", express.static(path.join(__dirname, "public/products")));
app.use("/hero", express.static(path.join(__dirname, "public/hero")));
app.use("/services", express.static(path.join(__dirname, "public/services")));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/services", serviceRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});