import { motion } from "framer-motion";
import {
  FaLeaf,
  FaRecycle,
  FaTools,
  FaAward,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050608] py-20 px-4"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-lime-500/10 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[5px] text-lime-400">
            ABOUT REVIVEHUB
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Giving Every
            <span className="text-lime-400"> Device</span>
            <br />
            A New Life
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            ReviveHub specializes in repairing, refurbishing and responsibly
            reusing electrical and electronic products. Our mission is to reduce
            e-waste while delivering reliable, affordable and sustainable
            technology solutions for homes and businesses.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <FaRecycle className="mt-1 text-3xl text-lime-400" />
              <div>
                <h3 className="text-xl font-bold">Sustainable Reuse</h3>
                <p className="text-gray-400">
                  Extending the life of valuable electronic products.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaTools className="mt-1 text-3xl text-lime-400" />
              <div>
                <h3 className="text-xl font-bold">Expert Engineers</h3>
                <p className="text-gray-400">
                  Skilled technicians with professional repair expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLeaf className="mt-1 text-3xl text-lime-400" />
              <div>
                <h3 className="text-xl font-bold">Eco Friendly</h3>
                <p className="text-gray-400">
                  Helping reduce electronic waste and protect the environment.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >

          <img
            src="/logo.png"
            alt="ReviveHub"
            className="w-full max-w-[420px] object-contain drop-shadow-[0_0_60px_rgba(132,255,0,0.4)]"
          />

          <div className="mt-10 grid w-full grid-cols-3 gap-4">

            <div className="rounded-2xl border border-lime-500/20 bg-[#111] p-5 text-center">
              <FaUsers className="mx-auto mb-3 text-3xl text-lime-400" />
              <h3 className="text-2xl font-black">500+</h3>
              <p className="mt-2 text-sm text-gray-400">
                Happy Customers
              </p>
            </div>

            <div className="rounded-2xl border border-lime-500/20 bg-[#111] p-5 text-center">
              <FaAward className="mx-auto mb-3 text-3xl text-lime-400" />
              <h3 className="text-2xl font-black">1000+</h3>
              <p className="mt-2 text-sm text-gray-400">
                Devices Repaired
              </p>
            </div>

            <div className="rounded-2xl border border-lime-500/20 bg-[#111] p-5 text-center">
              <FaShieldAlt className="mx-auto mb-3 text-3xl text-lime-400" />
              <h3 className="text-2xl font-black">Warranty</h3>
              <p className="mt-2 text-sm text-gray-400">
                Quality Support
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}