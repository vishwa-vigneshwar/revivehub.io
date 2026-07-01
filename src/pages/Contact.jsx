import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="mini-label">CONTACT REVIVEHUB</p>
          <h1 className="page-title">Let's Revive It.</h1>
          <p className="section-subtitle">
            Repair request, old product evaluation, refurbished product enquiry —
            edhunaalum message pannunga.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-page-grid">
          <div className="contact-details">
            <div className="contact-heading">
              <span className="contact-badge">REVIVEHUB</span>
              <h2>Get in touch with us.</h2>
              <p>
                Unga old electrical product-ku photo anuppi enquiry pannalaam.
                Naanga check pannitu reply pannuvom.
              </p>
            </div>

            <div className="contact-info-list">
              <a href="tel:+919876543210" className="contact-info-card">
                <div className="contact-info-icon"><Phone size={21} /></div>
                <div><small>CALL US</small><strong>+91 98765 43210</strong></div>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >
                <div className="contact-info-icon"><MessageCircle size={21} /></div>
                <div><small>WHATSAPP</small><strong>Chat with ReviveHub</strong></div>
              </a>

              <a href="mailto:hello@revivehub.in" className="contact-info-card">
                <div className="contact-info-icon"><Mail size={21} /></div>
                <div><small>EMAIL</small><strong>hello@revivehub.in</strong></div>
              </a>

              <div className="contact-info-card">
                <div className="contact-info-icon"><MapPin size={21} /></div>
                <div><small>LOCATION</small><strong>Tamil Nadu, India</strong></div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📷</div>
                <div><small>INSTAGRAM</small><strong>@revivehub</strong></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-top">
              <h2>Send an enquiry</h2>
              <p>Details fill pannunga. Soon contact pannuvom.</p>
            </div>

            {sent && (
              <div className="success-message">
                <CheckCircle2 size={20} />
                Message sent! ReviveHub team soon contact pannuvom.
              </div>
            )}

            <div className="form-grid">
              <div className="form-group">
                <label>Your Name *</label>
                <input required placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input required type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group full">
                <label>Enquiry Type *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select enquiry type</option>
                  <option>Repair / Service</option>
                  <option>Sell Old Product</option>
                  <option>Buy Refurbished Product</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="form-group full">
                <label>Message *</label>
                <textarea required rows="6" placeholder="Write your product details or enquiry..." />
              </div>

              <div className="form-group full">
                <button className="btn btn-primary submit-btn" type="submit">
                  <Send size={18} />
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}