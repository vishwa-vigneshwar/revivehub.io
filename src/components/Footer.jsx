import { Link } from "react-router-dom";
import { MapPin, Phone, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <div className="brand-icon">
              <Wrench size={20} />
            </div>

            <div>
              <div className="brand-name">
                Revive<span>Hub</span>
              </div>
              <small>Bring Back To Life Center</small>
            </div>
          </Link>

          <p className="footer-text">
            Repair, refurbish and revive old electrical products.
            Give your electronics a useful second life.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/shop">Shop Products</Link>
            <Link to="/service">Service Request</Link>
            <Link to="/sell">Sell Old Item</Link>
            <Link to="/gallery">Revival Gallery</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="contact-list">
            <p><Phone size={16} /> +91 98765 43210</p>
            <p><MapPin size={16} /> Tamil Nadu, India</p>
            <p>📷 @revivehub</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} ReviveHub. All rights reserved.</p>

        <div className="socials">
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">f</a>
        </div>
      </div>
    </footer>
  );
}