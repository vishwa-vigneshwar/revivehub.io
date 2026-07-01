import { useState } from "react";
import { CheckCircle2, Upload, Wrench } from "lucide-react";

export default function Service() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="mini-label">REPAIR REQUEST</p>
          <h1 className="page-title">Service My Item</h1>
          <p className="section-subtitle">
            Product photo, problem details, contact number upload pannu.
            Naanga inspect pannitu ungalukku contact pannuvom.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container request-layout">
          <div className="request-info">
            <div className="request-icon">
              <Wrench size={30} />
            </div>

            <h2>Before you replace it, let us inspect it.</h2>
            <p>
              Fan, mixer, UPS, inverter, battery, LED light, motor and other
              electrical products-ku service request submit pannalaam.
            </p>

            <div className="request-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Product photo upload pannunga</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Problem clear-ah describe pannunga</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Inspection-ku apram contact pannuvom</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Warranty illa — rework support possible</span>
              </div>
            </div>
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <CheckCircle2 size={20} />
                Service request submitted! Naanga soon contact pannuvom.
              </div>
            )}

            <div className="form-grid">
              <div className="form-group">
                <label>Customer Name *</label>
                <input required placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input required type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label>Product Type *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select product type</option>
                  <option>Fan</option>
                  <option>Mixer Grinder</option>
                  <option>UPS</option>
                  <option>Inverter</option>
                  <option>Battery</option>
                  <option>LED Light</option>
                  <option>Motor</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Brand</label>
                <input placeholder="Example: Bajaj, Crompton..." />
              </div>

              <div className="form-group full">
                <label>Address *</label>
                <textarea required rows="3" placeholder="Pickup / service address" />
              </div>

              <div className="form-group full">
                <label>Problem Description *</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Example: Fan is not rotating, burning smell coming..."
                />
              </div>

              <div className="form-group full">
                <label>Product Photos</label>
                <label className="upload-box">
                  <Upload size={26} />
                  <strong>Click to upload product images</strong>
                  <span>JPG, PNG — multiple images allowed</span>
                  <input type="file" accept="image/*" multiple hidden />
                </label>
              </div>

              <div className="form-group full">
                <button className="btn btn-primary submit-btn" type="submit">
                  <Wrench size={18} />
                  Request Inspection
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}