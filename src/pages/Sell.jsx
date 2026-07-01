import { useState } from "react";
import { CheckCircle2, CircleDollarSign, Upload } from "lucide-react";

export default function Sell() {
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
          <p className="mini-label">SELL TO REVIVEHUB</p>
          <h1 className="page-title">Sell Your Old Item</h1>
          <p className="section-subtitle">
            Unga old electrical product photo upload panni details sollunga.
            Naanga inspect panni buy panna mudiyuma nu contact pannuvom.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container request-layout">
          <div className="request-info sell-info">
            <div className="request-icon">
              <CircleDollarSign size={30} />
            </div>

            <h2>Old item-ku value irukkalam.</h2>
            <p>
              Work aagatha product kooda submit pannalaam. Repair panna
              mudiyuma, parts-ku use aaguma, refurbish panna mudiyuma nu
              ReviveHub team evaluate pannuvom.
            </p>

            <div className="request-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Clear product photos upload pannunga</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Working condition honest-ah sollunga</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Expected price mention pannalaam</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Inspection-ku apram final evaluation</span>
              </div>
            </div>
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <CheckCircle2 size={20} />
                Product submitted! Evaluation-ku apram contact pannuvom.
              </div>
            )}

            <div className="form-grid">
              <div className="form-group">
                <label>Your Name *</label>
                <input required placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input required type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label>Product Name *</label>
                <input required placeholder="Example: Bajaj Table Fan" />
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>Fan</option>
                  <option>Mixer Grinder</option>
                  <option>UPS</option>
                  <option>Inverter</option>
                  <option>Battery</option>
                  <option>LED Light</option>
                  <option>Motor</option>
                  <option>Electrical Board</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Brand</label>
                <input placeholder="Example: Crompton, Bajaj..." />
              </div>

              <div className="form-group">
                <label>Product Age</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select approximate age
                  </option>
                  <option>Less than 1 year</option>
                  <option>1 - 3 years</option>
                  <option>3 - 5 years</option>
                  <option>More than 5 years</option>
                  <option>Not sure</option>
                </select>
              </div>

              <div className="form-group">
                <label>Working Condition *</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Select condition
                  </option>
                  <option>Working properly</option>
                  <option>Working with issue</option>
                  <option>Not working</option>
                  <option>For parts only</option>
                </select>
              </div>

              <div className="form-group">
                <label>Expected Price (₹)</label>
                <input type="number" min="0" placeholder="Example: 500" />
              </div>

              <div className="form-group full">
                <label>Product Description / Problem Details *</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Example: Fan motor sound varudhu, speed control work aagala..."
                />
              </div>

              <div className="form-group full">
                <label>Product Photos *</label>
                <label className="upload-box">
                  <Upload size={26} />
                  <strong>Click to upload old product images</strong>
                  <span>Front, back and damaged area photos upload pannunga</span>
                  <input required type="file" accept="image/*" multiple hidden />
                </label>
              </div>

              <div className="form-group full">
                <label>Address *</label>
                <textarea
                  required
                  rows="3"
                  placeholder="Pickup address / location"
                />
              </div>

              <div className="form-group full">
                <button className="btn btn-primary submit-btn" type="submit">
                  <CircleDollarSign size={18} />
                  Request Evaluation
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}