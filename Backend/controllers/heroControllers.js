const heroModel = require("../models/heroModels.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ================= Multer Setup =================

const heroDir = path.join(__dirname, "../public/hero");

// Auto create folder if not exists
if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, heroDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const uploadHero = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit
});

// ================= Upload Hero =================

const uploadHeroMedia = async (req, res) => {

  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "File is required" });
  }

  try {

    // Delete old hero (only one allowed)
    const oldHero = await heroModel.findOne();
    if (oldHero) {
      const oldPath = path.join(heroDir, oldHero.media);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
      await heroModel.deleteMany();
    }

    const type = file.mimetype.startsWith("video") ? "video" : "image";

    const hero = new heroModel({
      media: file.filename,
      type: type
    });

    const savedHero = await hero.save();

    res.status(201).json({
      message: "Hero uploaded successfully",
      result: savedHero
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ================= Get Hero =================

const getHero = async (req, res) => {

  try {
    const hero = await heroModel.findOne();

    if (!hero) {
      return res.status(404).json({ message: "No hero found" });
    }

    res.status(200).json({
      message: "Success",
      result: hero
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  uploadHero,
  uploadHeroMedia,
  getHero
};