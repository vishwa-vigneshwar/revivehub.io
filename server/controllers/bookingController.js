import { supabase } from "../config/supabase.js";
import { sendBookingEmail } from "../services/email.js";

export const createBooking = async (req, res) => {
  try {
    const {
      customer_name,
      phone,
      email,
      address,
      product_type,
      brand,
      problem,
    } = req.body;

    // Validation
    if (
      !customer_name ||
      !phone ||
      !email ||
      !address ||
      !product_type ||
      !brand ||
      !problem
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          customer_name,
          phone,
          email,
          address,
          product_type,
          brand,
          problem,
          status: "Pending",
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    // Send Email
    await sendBookingEmail(data[0]);

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      data,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// Get All Bookings
export const getBookings = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// Update Booking Status
export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    res.json({
      success: true,
      message: "Status Updated",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    res.json({
      success: true,
      message: "Booking Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};