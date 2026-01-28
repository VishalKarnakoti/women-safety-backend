const express = require("express");
const router = express.Router();
const Alert = require("../models/Alert");

// ✅ GET all alerts
router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST new alert
router.post("/", async (req, res) => {
  const alert = new Alert(req.body);
  try {
    const savedAlert = await alert.save();
    res.status(201).json(savedAlert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
