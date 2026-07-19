import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    product: "Table Fan",
    before: "🌀",
    after: "✨",
    work: "Motor service, bearing replacement and full cleaning",
    status: "Revived & Tested",
  },
  {
    id: 2,
    product: "Mixer Grinder",
    before: "🥤",
    after: "⚡",
    work: "Motor carbon replacement, wiring check and jar coupling service",
    status: "Revived & Tested",
  },
  {
    id: 3,
    product: "UPS Unit",
    before: "🔋",
    after: "🔌",
    work: "Battery terminal repair, power board service and output testing",
    status: "Revived & Tested",
  },
  {
    id: 4,
    product: "Emergency Light",
    before: "💡",
    after: "🌟",
    work: "Charging circuit repair and LED panel replacement",
    status: "Revived & Tested",
  },
  {
    id: 5,
    product: "Ceiling Fan Motor",
    before: "⚙️",
    after: "🛠️",
    work: "Winding inspection, capacitor replacement and speed test",
    status: "Revived & Tested",
  },
  {
    id: 6,
    product: "Inverter Battery",
    before: "🔋",
    after: "♻️",
    work: "Terminal cleaning, voltage check and charging test",
    status: "Revived & Tested",
  },
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="mini-label">REVIVAL GALLERY</p>
          <h1 className="page-title">Before Scrap. After Revive.</h1>
          <p className="section-subtitle">
            Old electrical products-ku repair, cleaning, testing, refurbishment
            panni useful-ah maathura work samples.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-intro">
            <div className="gallery-intro-icon">
              <Wrench size={28} />
            </div>

            <div>
              <h2>Every product deserves one more chance.</h2>
              <p>
                Indha gallery-la irukura products demo samples. Real website
                launch pannumbodhu unga actual before/after photos replace
                pannalam.
              </p>
            </div>
          </div>

          <div className="revival-grid">
            {projects.map((project) => (
              <article className="revival-card" key={project.id}>
                <div className="revival-images">
                  <div className="revival-side before-side">
                    <small>BEFORE</small>
                    <span>{project.before}</span>
                    <p>Old / Issue</p>
                  </div>

                  <div className="revival-arrow">
                    <ArrowRight size={22} />
                  </div>

                  <div className="revival-side after-side">
                    <small>AFTER</small>
                    <span>{project.after}</span>
                    <p>Revived</p>
                  </div>
                </div>

                <div className="revival-content">
                  <div className="revival-status">
                    <CheckCircle2 size={16} />
                    {project.status}
                  </div>

                  <h3>{project.product}</h3>
                  <p>{project.work}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="gallery-cta">
            <div>
              <h2>Unga product-um revive panna mudiyuma?</h2>
              <p>Photo upload pannunga. Naanga inspect panni solrom.</p>
            </div>

            <Link className="btn btn-primary" to="/service">
              Request Service <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}