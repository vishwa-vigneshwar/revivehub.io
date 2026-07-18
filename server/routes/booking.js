import express from "express";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

// Test Route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Booking Route Working 🚀"
  });
});

// Create Booking
router.post("/", createBooking);

export default router;