import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg"></div>

      <div className="container hero-grid">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-tag">
            ♻ INDIA'S SMART ELECTRONICS REVIVAL PLATFORM
          </span>

          <h1>
            Don't Scrap It.
            <br />
            <span>Revive It.</span>
          </h1>

          <p>
            Repair, refurbish, buy and sell old electrical &
            electronic products through one trusted platform.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Start Service
            </button>

            <button className="secondary-btn">
              Shop Products
              <FaArrowRight />
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>5000+</h2>
              <span>Products Revived</span>
            </div>

            <div>
              <h2>98%</h2>
              <span>Customer Satisfaction</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Support</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="floating-card laptop">
            💻 Refurbished Laptop
          </div>

          <div className="floating-card phone">
            📱 Smartphone
          </div>

          <div className="floating-card fan">
            🌀 Ceiling Fan
          </div>

          <div className="hero-circle"></div>

        </motion.div>

      </div>

    </section>
  );
}