const express = require("express");
const router = express.Router();

const {
  uploadService,
  createService,
  getAllServices,
  deleteService,
  updateService
} = require("../controllers/serviceControllers.js");

router.post("/add", uploadService.single("image"), createService);
router.get("/all", getAllServices);
router.delete("/delete/:id", deleteService);
router.put("/update/:id", uploadService.single("image"), updateService);

module.exports = router;