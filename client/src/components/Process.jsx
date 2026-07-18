import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaTruckPickup,
  FaTools,
  FaCheckCircle,
  FaShippingFast,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardCheck />,
    title: "Request Pickup",
    desc: "Submit your repair request through our online booking form.",
  },
  {
    icon: <FaTruckPickup />,
    title: "Doorstep Collection",
    desc: "Our team safely collects your device from your location.",
  },
  {
    icon: <FaTools />,
    title: "Repair & Refurbish",
    desc: "Professional diagnosis, repair and refurbishment by experts.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Testing",
    desc: "Every repaired product is tested before delivery.",
  },
  {
    icon: <FaShippingFast />,
    title: "Safe Delivery",
    desc: "Your refurbished product is delivered with warranty support.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#07090d] py-20 px-4"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,255,0,.08),transparent_65%)]"></div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Simple &
            <span className="text-lime-400"> Transparent</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            From pickup to delivery, every product follows a professional
            refurbishment process with complete transparency.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          <div className="absolute left-0 right-0 top-10 hidden h-1 rounded-full bg-lime-500/20 lg:block">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-lime-500 to-green-400"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-3xl border border-lime-500/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-lime-500/40"
              >

                {/* Step Number */}
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 font-bold text-black">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-500 text-3xl text-black shadow-[0_0_35px_rgba(132,255,0,.45)] transition group-hover:scale-110">

                  {step.icon}

                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold">

                  {step.title}

                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-400">

                  {step.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <a
            href="#booking"
            className="inline-flex items-center gap-3 rounded-2xl bg-lime-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-lime-400"
          >
            Book Your Pickup
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}