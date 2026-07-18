import { motion } from "framer-motion";
import {
  FaLaptop,
  FaBolt,
  FaRecycle,
  FaIndustry,
  FaPrint,
  FaMicrochip,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBolt size={40} />,
    title: "Electrical Equipment",
    desc: "Inspection, repair and complete restoration of electrical equipment.",
  },
  {
    icon: <FaLaptop size={40} />,
    title: "Computers & Laptops",
    desc: "Professional repair, upgrades, refurbishment and performance testing.",
  },
  {
    icon: <FaPrint size={40} />,
    title: "Office Equipment",
    desc: "Repair and maintenance for printers, scanners and office electronics.",
  },
  {
    icon: <FaIndustry size={40} />,
    title: "Industrial Electronics",
    desc: "Industrial PCB, machine controller and electronic equipment servicing.",
  },
  {
    icon: <FaMicrochip size={40} />,
    title: "PCB & Circuit Repair",
    desc: "Component-level diagnostics, soldering and motherboard repair.",
  },
  {
    icon: <FaRecycle size={40} />,
    title: "E-Waste Collection",
    desc: "Safe collection, responsible recycling and sustainable reuse.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050608] py-20 px-4"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-400">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Professional{" "}
            <span className="text-lime-400">
              Refurbishment
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            We repair, refurbish and responsibly reuse electrical and
            electronic products to reduce e-waste and extend product life.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
              className="group rounded-3xl border border-lime-500/10 bg-gradient-to-b from-[#10151b] to-[#0b0f14] p-8 shadow-lg transition hover:border-lime-500/40 hover:shadow-lime-500/20"
            >

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-500/10 text-lime-400 transition group-hover:bg-lime-500 group-hover:text-black">

                {item.icon}

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="leading-7 text-gray-400">

                {item.desc}

              </p>

              <a
                href="#booking"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-lime-500 px-5 py-3 font-semibold text-black transition hover:bg-lime-400"
              >
                Book Service
                <FaArrowRight />
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}