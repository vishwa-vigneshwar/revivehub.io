import { motion } from "framer-motion";
import {
  FaUsers,
  FaRecycle,
  FaAward,
  FaLeaf,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "5,000+",
    title: "Happy Customers",
  },
  {
    icon: <FaRecycle />,
    number: "10,000+",
    title: "Products Revived",
  },
  {
    icon: <FaAward />,
    number: "1 Year",
    title: "Warranty Support",
  },
  {
    icon: <FaLeaf />,
    number: "20 Tons",
    title: "E-Waste Reduced",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#050608]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-lime-400 font-semibold">
            TRUSTED BY CUSTOMERS
          </span>

          <h2 className="text-5xl font-black mt-4">
            Building a
            <span className="text-lime-400">
              {" "}Greener Future
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every refurbished product helps reduce electronic waste and gives
            valuable devices a second life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-lime-500/20 bg-white/5 backdrop-blur-xl p-8 text-center"
            >
              <div className="text-5xl text-lime-400 mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-black">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}