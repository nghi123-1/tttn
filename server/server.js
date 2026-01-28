console.log("🔥 RUNNING:", __filename);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { connectDB } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const trackingRoutes = require("./routes/trackingRoutes");
const statsRoutes = require("./routes/statsRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// TEST route
app.get("/test", (req, res) => {
  res.send("OK TEST");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
