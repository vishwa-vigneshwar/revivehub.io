import express from "express";

import {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Update Status
router.put("/:id", updateBookingStatus);

// Delete Booking
router.delete("/:id", deleteBooking);

export default router;
