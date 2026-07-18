import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import BookingForm from "./components/BookingForm";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrustSection from "./components/TrustSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#050608] text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <HeroStats />

      <section id="booking">
        <BookingForm />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="trust">
        <TrustSection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
