const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const alertRoutes = require("./routes/alertRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/womensafety")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/api/alerts", alertRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
app.get("/", (req, res) => {
  res.send("Women Safety Backend is running");
});
