import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    email: "",
    address: "",
    product_type: "",
    brand: "",
    model: "",
    device_age: "",
    priority: "Normal",
    warranty: "Not Sure",
    problem: "",
    condition: [],
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm((prev) => ({
        ...prev,
        condition: [...prev.condition, value],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        condition: prev.condition.filter((item) => item !== value),
      }));
    }
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      images: Array.from(e.target.files),
    });
  };

  const submit = (e) => {
    e.preventDefault();

    setLoading(true);

    const now = new Date();

    const requestId =
      "RVH-" +
      now.getFullYear() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0") +
      "-" +
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0") +
      "-" +
      Math.random().toString(36).substring(2, 6).toUpperCase();

    const bookingDate = now.toLocaleDateString("en-IN");
    const bookingTime = now.toLocaleTimeString("en-IN");

    const phoneNumber = "918682875077";

    const message = `🟢 REVIVEHUB

══════════════════════

🎫 SERVICE REQUEST

Reference ID
${requestId}

══════════════════════

📅 Booking Date
${bookingDate}

⏰ Booking Time
${bookingTime}

══════════════════════

👤 CUSTOMER DETAILS

Name
${form.customer_name}

Phone
${form.phone}

Email
${form.email}

Address
${form.address}

══════════════════════

💻 DEVICE DETAILS

Product
${form.product_type}

Brand
${form.brand}

Model
${form.model}

Device Age
${form.device_age}

══════════════════════

⚠ ISSUE

${form.problem}

══════════════════════

⭐ Priority

${form.priority}

══════════════════════

🛡 Warranty

${form.warranty}

══════════════════════

📦 Device Condition

${form.condition.join("\n")}

══════════════════════

👨‍🔧 Engineer Notes

(To be updated by ReviveHub)

══════════════════════

📸 Images

Customer will send photos after opening WhatsApp.

══════════════════════

🌿 ReviveHub
Don't Scrap It. Revive It.
`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setLoading(false);

    setForm({
      customer_name: "",
      phone: "",
      email: "",
      address: "",
      product_type: "",
      brand: "",
      model: "",
      device_age: "",
      priority: "Normal",
      warranty: "Not Sure",
      problem: "",
      condition: [],
      images: [],
    });
  };

  return (
    <section className="bg-[#050608] py-20 px-5">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <h2 className="text-5xl font-black text-white">
            Book <span className="text-lime-400">Pickup</span>
          </h2>

          <p className="mt-3 text-gray-400">
            Fill in your device details and schedule a doorstep pickup.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="grid gap-6 rounded-3xl border border-lime-500/20 bg-[#101010] p-8 md:grid-cols-2"
        >

          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={form.customer_name}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="address"
            placeholder="Pickup Address"
            value={form.address}
            onChange={handleChange}
            required
            className="input"
          />

          <select
            name="product_type"
            value={form.product_type}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select Product</option>
            <option>Laptop</option>
            <option>Desktop</option>
            <option>Printer</option>
            <option>UPS</option>
            <option>Monitor</option>
            <option>Television</option>
            <option>Motherboard</option>
            <option>Power Supply</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            value={form.model}
            onChange={handleChange}
            className="input"
          />

          <select
            name="device_age"
            value={form.device_age}
            onChange={handleChange}
            className="input"
          >
            <option value="">Device Age</option>
            <option>Less than 1 Year</option>
            <option>1 - 3 Years</option>
            <option>3 - 5 Years</option>
            <option>More than 5 Years</option>
          </select>

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="input"
          >
            <option>Normal</option>
            <option>Urgent</option>
            <option>Critical</option>
          </select>

          <select
            name="warranty"
            value={form.warranty}
            onChange={handleChange}
            className="input"
          >
            <option>Not Sure</option>
            <option>Under Warranty</option>
            <option>Out of Warranty</option>
            <option>Extended Warranty</option>
          </select>

          <textarea
            rows="5"
            name="problem"
            placeholder="Describe the problem..."
            value={form.problem}
            onChange={handleChange}
            required
            className="input md:col-span-2"
          />
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-white">
              Device Condition
            </h3>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

              {[
                "No Physical Damage",
                "Screen Damage",
                "Water Damage",
                "Charging Issue",
                "Battery Issue",
                "Display Issue",
                "Keyboard Issue",
                "Motherboard Issue",
                "Power Supply Issue",
                "Loose Parts",
                "Burn Marks",
                "Other"
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-gray-700 p-3 text-gray-300"
                >
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckbox}
                    className="accent-lime-400"
                  />
                  <span>{item}</span>
                </label>
              ))}

            </div>
          </div>

          <div className="md:col-span-2">

            <label className="mb-3 block text-white font-bold">
              Upload Device Images (Optional)
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImage}
              className="input"
            />

            <p className="mt-2 text-sm text-gray-500">
              After WhatsApp opens, send the selected images in the same chat.
            </p>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 rounded-2xl bg-lime-400 py-5 text-xl font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-lime-300 disabled:opacity-50"
          >
            {loading
              ? "Opening WhatsApp..."
              : "🚚 Book Pickup"}
          </button>

        </form>

      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid #3f3f46;
          background: #050608;
          color: white;
          outline: none;
          transition: .3s;
        }

        .input:focus {
          border-color: #84ff00;
          box-shadow: 0 0 18px rgba(132,255,0,.35);
        }

        textarea.input {
          resize: vertical;
        }

        select.input option {
          background: #050608;
          color: white;
        }
      `}</style>

    </section>
  );
}