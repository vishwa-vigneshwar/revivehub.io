import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Leaf,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <ShoppingBag size={27} />,
    title: "Buy Refurbished",
    text: "Tested and repaired electrical products at affordable prices.",
    link: "/shop",
    button: "Shop Products",
  },
  {
    icon: <Wrench size={27} />,
    title: "Service My Item",
    text: "Send your product details and request an inspection.",
    link: "/service",
    button: "Request Service",
  },
  {
    icon: <RefreshCw size={27} />,
    title: "Sell Old Item",
    text: "Upload old electronics and get an evaluation from us.",
    link: "/sell",
    button: "Sell Your Item",
  },
];

const categories = [
  { name: "Fans", emoji: "🌀" },
  { name: "Mixers", emoji: "🥤" },
  { name: "UPS & Inverters", emoji: "🔋" },
  { name: "Batteries", emoji: "⚡" },
  { name: "LED Lights", emoji: "💡" },
  { name: "Motors", emoji: "⚙️" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <Leaf size={16} />
              Repair • Refurbish • Reuse
            </div>

            <h1>
              Don&apos;t Scrap It.
              <span> Revive It.</span>
            </h1>

            <p>
              ReviveHub gives old electrical and electronic products a second
              life through repair, refurbishment and resale.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/shop">
                Shop Refurbished <ArrowRight size={18} />
              </Link>

              <Link className="btn btn-light" to="/service">
                <Wrench size={18} /> Service My Item
              </Link>
            </div>

            <div className="hero-trust">
              <span><BadgeCheck size={17} /> Quality Checked</span>
              <span><BatteryCharging size={17} /> Working Condition</span>
              <span><Leaf size={17} /> Eco Friendly</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <div className="hero-card main-product">
              <div className="product-emoji">🔌</div>
              <div>
                <strong>Old Electronics</strong>
                <small>Ready for a second life</small>
              </div>
            </div>

            <div className="hero-card floating-card one">
              <span>🔧</span>
              <div>
                <strong>Repair</strong>
                <small>Expert service</small>
              </div>
            </div>

            <div className="hero-card floating-card two">
              <span>♻️</span>
              <div>
                <strong>Refurbish</strong>
                <small>Quality tested</small>
              </div>
            </div>

            <div className="hero-device-box">
              <div className="device-top">
                <span>REVIVEHUB</span>
                <span className="status-dot" />
              </div>
              <div className="device-screen">REVIVE</div>
              <div className="device-parts">
                <span>⚙️</span>
                <span>🔋</span>
                <span>💡</span>
                <span>🛠️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="container quick-grid">
          <div><strong>Repair</strong><span>Fix old products</span></div>
          <div><strong>Refurbish</strong><span>Make them useful again</span></div>
          <div><strong>Resell</strong><span>Affordable products</span></div>
          <div><strong>Reuse</strong><span>Reduce e-waste</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="mini-label">WHAT WE DO</p>
          <h2 className="section-title">One place for old electronics.</h2>
          <p className="section-subtitle">
            Buy refurbished products, request a repair, or sell your unused
            electrical items to ReviveHub.
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to={service.link}>
                  {service.button} <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <div className="section-row">
            <div>
              <p className="mini-label">WE HANDLE</p>
              <h2 className="section-title">Products we revive.</h2>
            </div>
            <Link to="/shop" className="text-link">
              View Shop <ArrowRight size={18} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link to="/shop" className="category-card" key={category.name}>
                <span>{category.emoji}</span>
                <strong>{category.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-box">
          <div>
            <p className="mini-label">HOW IT WORKS</p>
            <h2 className="section-title">
              Your old product can still be valuable.
            </h2>
            <p className="section-subtitle">
              Send a photo and details. We inspect it, tell you what can be
              done, and help repair, buy, or refurbish it.
            </p>

            <Link className="btn btn-primary" to="/sell">
              Submit Old Item <ArrowRight size={18} />
            </Link>
          </div>

          <div className="steps">
            <div><b>01</b><span>Upload product photo</span></div>
            <div><b>02</b><span>Tell us the issue</span></div>
            <div><b>03</b><span>We inspect & evaluate</span></div>
            <div><b>04</b><span>Repair, buy or revive</span></div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container impact-grid">
          <div>
            <Sparkles size={30} />
            <strong>Less Waste</strong>
            <span>Old products get another chance.</span>
          </div>
          <div>
            <BatteryCharging size={30} />
            <strong>More Value</strong>
            <span>Save money with refurbished items.</span>
          </div>
          <div>
            <Leaf size={30} />
            <strong>Better Future</strong>
            <span>Reduce electrical waste together.</span>
          </div>
        </div>
      </section>
    </>
  );
}