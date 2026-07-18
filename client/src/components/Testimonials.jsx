import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Arun Kumar",
    review:
      "Excellent refurbishment service. My laptop works like new again.",
  },
  {
    name: "Priya S",
    review:
      "Professional pickup and delivery. Highly recommended.",
  },
  {
    name: "Ramesh",
    review:
      "Affordable pricing and great customer support.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-lime-400 font-semibold">
            CUSTOMER REVIEWS
          </span>

          <h2 className="text-5xl font-black mt-5">
            Trusted by
            <span className="text-lime-400"> Customers</span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 border border-lime-500/20 p-8"
            >

              <div className="flex gap-1 text-yellow-400">

                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />

              </div>

              <p className="mt-6 text-gray-300 leading-8">

                "{item.review}"

              </p>

              <h3 className="mt-8 text-xl font-bold">

                {item.name}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}