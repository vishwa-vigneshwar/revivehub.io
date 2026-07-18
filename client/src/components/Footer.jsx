import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918682875077?text=Hi%20ReviveHub,%20I%20need%20a%20repair%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-[0_0_30px_rgba(0,255,0,.5)] transition hover:scale-110 hover:bg-green-400"
      >
        <FaWhatsapp size={34} color="white" />
      </a>

      {/* Scroll Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lime-500 transition hover:scale-110 hover:bg-lime-400"
      >
        <FaArrowUp color="black" />
      </button>

      {/* Footer */}
      <footer className="mt-24 border-t border-lime-500/20 bg-[#050608]">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Company */}
            <div>
              <img
                src="/logo.png"
                alt="ReviveHub"
                className="mb-6 w-40"
              />

              <p className="leading-8 text-gray-400">
                ReviveHub gives electrical and electronic products a second life
                through professional repair, refurbishment and responsible reuse.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-xl font-bold">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-lime-400">Home</a></li>
                <li><a href="#about" className="hover:text-lime-400">About</a></li>
                <li><a href="#services" className="hover:text-lime-400">Services</a></li>
                <li><a href="#booking" className="hover:text-lime-400">Book Pickup</a></li>
                <li><a href="#contact" className="hover:text-lime-400">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-xl font-bold">
                Contact
              </h3>

              <p className="text-gray-400">
                📧 shop@revivehub.store
              </p>

              <p className="mt-3 text-gray-400">
                📱 +91 86828 75077
              </p>

              <p className="mt-3 text-gray-400">
                📍 Kanchipuram, Tamil Nadu, India
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-5 text-xl font-bold">
                Follow Us
              </h3>

              <div className="flex gap-5 text-2xl">

                <a href="#" className="transition hover:text-lime-400">
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/revivehub_officail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-lime-400"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/918682875077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-lime-400"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="mailto:shop@revivehub.store"
                  className="transition hover:text-lime-400"
                >
                  <FaEnvelope />
                </a>

              </div>
            </div>

          </div>

          <div className="mt-12 border-t border-lime-500/20 pt-8 text-center text-gray-500">
            © 2026 <span className="font-semibold text-lime-400">ReviveHub</span>. All Rights Reserved.
            <br />
            <span className="text-sm">
              Repair • Refurbish • Reuse
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}