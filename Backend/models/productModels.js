const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  }

}, { timestamps: true });

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;