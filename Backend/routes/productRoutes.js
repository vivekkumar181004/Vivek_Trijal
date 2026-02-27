const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  uploadProduct
} =require("../controllers/productControllers");

router.post("/add", uploadProduct.single("image"), createProduct);
router.get("/all", getAllProducts);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", uploadProduct.single("image"), updateProduct);

module.exports = router;