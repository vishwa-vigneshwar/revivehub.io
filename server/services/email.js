import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBookingEmail = async (booking) => {
  try {
    await resend.emails.send({
      from: "ReviveHub <onboarding@resend.dev>",
      to: ["shop@revivehub.store"],
      subject: `New Booking - ${booking.customer_name}`,
      html: `
        <h2>New Booking Received</h2>

        <p><b>Name:</b> ${booking.customer_name}</p>
        <p><b>Phone:</b> ${booking.phone}</p>
        <p><b>Email:</b> ${booking.email}</p>
        <p><b>Address:</b> ${booking.address}</p>
        <p><b>Product:</b> ${booking.product_type}</p>
        <p><b>Brand:</b> ${booking.brand}</p>
        <p><b>Problem:</b> ${booking.problem}</p>

        <hr/>

        <h3>ReviveHub</h3>
      `,
    });

    console.log("✅ Email Sent");

  } catch (err) {

    console.log(err);

  }
};