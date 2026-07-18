import { useState } from "react";
import api from "../services/api";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    email: "",
    address: "",
    product_type: "",
    brand: "",
    problem: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/booking", form);

      alert("✅ Booking Submitted Successfully!");

      console.log(res.data);

      setForm({
        customer_name: "",
        phone: "",
        email: "",
        address: "",
        product_type: "",
        brand: "",
        problem: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Booking Failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="booking"
      className="bg-[#050608] py-20 px-4"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Book <span className="text-lime-400">Pickup</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Schedule your repair request in less than one minute.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="grid gap-6 rounded-3xl border border-lime-500/20 bg-[#111111] p-6 shadow-xl md:grid-cols-2 md:p-10"
        >
          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={form.customer_name}
            onChange={handleChange}
            required
            className="rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            className="rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          />

          <input
            type="text"
            name="address"
            placeholder="Pickup Address"
            value={form.address}
            onChange={handleChange}
            required
            className="md:col-span-2 rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          />

          <select
            name="product_type"
            value={form.product_type}
            onChange={handleChange}
            required
            className="rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          >
            <option value="">Select Product</option>
            <option>Laptop</option>
            <option>Desktop</option>
            <option>Printer</option>
            <option>UPS</option>
            <option>Television</option>
            <option>Monitor</option>
            <option>Motherboard</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            name="problem"
            placeholder="Describe the problem..."
            value={form.problem}
            onChange={handleChange}
            required
            className="md:col-span-2 rounded-xl border border-gray-700 bg-black p-4 text-white outline-none transition focus:border-lime-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 rounded-xl bg-lime-500 py-4 text-lg font-bold text-black transition hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "🚚 Book Pickup"}
          </button>
        </form>
      </div>
    </section>
  );
}