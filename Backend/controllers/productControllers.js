// import productModel from "../models/product.model.js";
// import multer from "multer";
// import path from "path";

// // ================= Multer Setup =================

// const productDir = path.join("./public/products");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, productDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// export const uploadProduct = multer({ storage });

// // ================= Create Product =================

// export const createProduct = async (req, res) => {
//   const { title, description } = req.body;
//   const file = req.file?.filename;

//   if (!title || !description || !file) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const product = new productModel({
//       title,
//       description,
//       image: file,
//     });

//     const savedProduct = await product.save();

//     res.status(201).json({
//       message: "Product created successfully",
//       result: savedProduct,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ================= Get All Products =================

// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await productModel.find();

//     res.status(200).json({
//       message: "Success",
//       result: products,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ================= Delete Product =================

// export const deleteProduct = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const product = await productModel.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ================= Update Product =================

// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;
//   const file = req.file?.filename;

//   try {
//     const updatedProduct = await productModel.findByIdAndUpdate(
//       id,
//       {
//         title,
//         description,
//         image: file,
//       },
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({
//       message: "Product updated successfully",
//       result: updatedProduct,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

const productModel = require("../models/productModels.js");
const multer = require("multer");
const path = require("path");

// ================= Multer Setup =================

const productDir = path.join(__dirname, "../public/products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, productDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const uploadProduct = multer({ storage });

// ================= Create Product =================

const createProduct = async (req, res) => {

  const { title, description } = req.body;
  const file = req.file?.filename;

  if (!title || !description || !file) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = new productModel({
      title,
      description,
      image: file
    });

    const savedProduct = await product.save();

    res.status(201).json({
      message: "Product created successfully",
      result: savedProduct
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Get All Products =================

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(200).json({
      message: "Success",
      result: products
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Delete Product =================

const deleteProduct = async (req, res) => {

  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Update Product =================

const updateProduct = async (req, res) => {

  const { id } = req.params;
  const { title, description } = req.body;
  const file = req.file?.filename;

  try {

    const updatedData = {
      title,
      description
    };

    if (file) {
      updatedData.image = file;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      result: updatedProduct
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  uploadProduct
};