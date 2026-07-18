import { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Sell To Us", link: "#booking" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-lime-500/20 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/icon.png"
            alt="ReviveHub"
            className="h-12 w-12 object-contain lg:h-16 lg:w-16"
          />

          <div>
            <h1 className="text-xl font-extrabold tracking-wide lg:text-3xl">
              <span className="text-white">REVIVE</span>
              <span className="text-lime-400">HUB</span>
            </h1>

            <p className="hidden text-xs tracking-[4px] text-gray-400 lg:block">
              REPAIR • REUSE • REVIVE
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="font-semibold text-white transition hover:text-lime-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://wa.me/918682875077?text=Hi%20ReviveHub,%20I%20need%20a%20repair%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-lime-500 px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-lime-400"
          >
            <FaTruck />
            BOOK PICKUP
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-lime-500/20 bg-[#050608] lg:hidden"
        >
          <div className="flex flex-col gap-5 px-6 py-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold text-white transition hover:text-lime-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/918682875077?text=Hi%20ReviveHub,%20I%20need%20a%20repair%20service."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-3 rounded-xl bg-lime-500 py-4 font-bold text-black transition hover:bg-lime-400"
            >
              <FaTruck />
              BOOK PICKUP
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}