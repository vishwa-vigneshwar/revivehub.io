import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "ReviveHub API",
    version: "1.0.0",
    status: "Running 🚀",
  });
});

app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
====================================
🚀 ReviveHub Server Started
🌐 http://localhost:${PORT}
====================================
`);
});
