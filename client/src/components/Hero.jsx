import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050608] pt-28 pb-16 lg:min-h-screen lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-0 h-[350px] w-[350px] rounded-full bg-lime-500/10 blur-[120px] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-green-500/10 blur-[100px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 lg:grid lg:min-h-screen lg:grid-cols-2 lg:gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-xs tracking-[3px] text-lime-400 sm:text-sm">
            DON'T SCRAP IT • REVIVE IT
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:mt-8 lg:text-8xl">
            Give Your
            <br />
            <span className="text-lime-400">Electronics</span>
            <br />
            A Second Life
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
            ReviveHub restores electrical and electronic products through
            repair, refurbishment and responsible reuse—reducing e-waste while
            helping customers save money.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="w-full rounded-2xl bg-lime-500 px-8 py-4 font-bold text-black transition hover:scale-105 sm:w-auto">
              Request Pickup
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-lime-500 px-8 py-4 transition hover:bg-lime-500 hover:text-black sm:w-auto">
              Explore Services
              <FaArrowRight />
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[280px] w-[280px] rounded-full bg-lime-500/20 blur-[80px] sm:h-[400px] sm:w-[400px] lg:h-[550px] lg:w-[550px] lg:blur-[140px]" />

          <img
            src="/logo.png"
            alt="ReviveHub"
            className="relative w-[75%] max-w-[450px] object-contain lg:w-full lg:max-w-[650px] drop-shadow-[0_0_80px_rgba(132,255,0,0.6)]"
          />
        </motion.div>

      </div>

      <div className="mt-12 text-center lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2">
        <p className="text-xs tracking-[3px] text-gray-500 sm:text-sm">
          REPAIR • REFURBISH • REUSE
        </p>
      </div>
    </section>
  );
}