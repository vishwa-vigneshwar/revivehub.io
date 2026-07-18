import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050608] py-20 px-4"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-400">
            CONTACT US
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Get In <span className="text-lime-400">Touch</span>
          </h2>

          <p className="mt-5 text-gray-400">
            Have questions? Need a repair? Contact ReviveHub today.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-lime-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaPhone className="text-3xl text-lime-400" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <h4 className="text-xl font-bold">
                    +91 86828 75077
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-3xl text-lime-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <h4 className="text-xl font-bold">
                    shop@revivehub.store
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-3xl text-lime-400" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <h4 className="text-xl font-bold">
                    Kanchipuram, Tamil Nadu, India
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaClock className="text-3xl text-lime-400" />
                <div>
                  <p className="text-gray-400">Business Hours</p>
                  <h4 className="text-xl font-bold">
                    Mon - Sat | 9:00 AM - 7:00 PM
                  </h4>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/918682875077?text=Hi%20ReviveHub,%20I%20need%20a%20repair%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-500 py-4 text-lg font-bold text-black transition hover:bg-lime-400"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-lime-500/20"
          >
            <iframe
              title="ReviveHub Location"
              src="https://www.google.com/maps?q=Kanchipuram,Tamil%20Nadu&output=embed"
              className="h-[500px] w-full"
              loading="lazy"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}