const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "ACTIVE"
  }
});

module.exports = mongoose.model("Alert", alertSchema);
