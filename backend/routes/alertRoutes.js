const express = require("express");
const router = express.Router();
const Alert = require("../models/Alert");

// Create SOS alert
router.post("/create", async (req, res) => {
  const { latitude, longitude } = req.body;

  const alert = new Alert({ latitude, longitude });
  await alert.save();

  res.json({ message: "SOS Alert Created", alert });
});

// Get all alerts
router.get("/", async (req, res) => {
  const alerts = await Alert.find({ status: "ACTIVE" });
  res.json(alerts);
});

module.exports = router;
