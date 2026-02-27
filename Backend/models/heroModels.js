const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  media: {
    type: String,
    required: true
  },
  type: {
    type: String, // image or video
    required: true
  }
}, { timestamps: true });

const heroModel = mongoose.model("Hero", heroSchema);

module.exports = heroModel;