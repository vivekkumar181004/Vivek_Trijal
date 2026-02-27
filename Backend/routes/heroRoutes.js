const express = require("express");
const router = express.Router();

const {
  uploadHero,
  uploadHeroMedia,
  getHero
} = require("../controllers/heroControllers");

router.post("/upload", uploadHero.single("media"), uploadHeroMedia);
router.get("/get", getHero);

module.exports = router;