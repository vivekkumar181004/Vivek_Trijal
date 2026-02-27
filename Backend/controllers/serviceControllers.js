const serviceModel = require("../models/serviceModels.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ================= Multer Setup =================

const serviceDir = path.join(__dirname, "../public/services");

if (!fs.existsSync(serviceDir)) {
  fs.mkdirSync(serviceDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, serviceDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const uploadService = multer({ storage });

// ================= Create Service =================

const createService = async (req, res) => {

  const { title, description } = req.body;
  const file = req.file?.filename;

  if (!title || !description || !file) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {

    const service = new serviceModel({
      title,
      description,
      image: file
    });

    const savedService = await service.save();

    res.status(201).json({
      message: "Service created successfully",
      result: savedService
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Get All Services =================

const getAllServices = async (req, res) => {

  try {
    const services = await serviceModel.find();

    res.status(200).json({
      message: "Success",
      result: services
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Delete Service =================

const deleteService = async (req, res) => {

  const { id } = req.params;

  try {

    const service = await serviceModel.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Delete image from folder
    const imagePath = path.join(serviceDir, service.image);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    res.status(200).json({ message: "Service deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Update Service =================

const updateService = async (req, res) => {

  const { id } = req.params;
  const { title, description } = req.body;
  const file = req.file?.filename;

  try {

    const service = await serviceModel.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // If new image uploaded, delete old one
    if (file) {
      const oldPath = path.join(serviceDir, service.image);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
      service.image = file;
    }

    service.title = title || service.title;
    service.description = description || service.description;

    await service.save();

    res.status(200).json({
      message: "Service updated successfully",
      result: service
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  uploadService,
  createService,
  getAllServices,
  deleteService,
  updateService
};