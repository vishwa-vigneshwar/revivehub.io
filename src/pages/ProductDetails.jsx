import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { products } from "../data/products.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="section">
        <div className="container product-not-found">
          <span>😕</span>
          <h1>Product not found</h1>
          <p>This product may have been sold or removed.</p>
          <Link className="btn btn-primary" to="/shop">
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi ReviveHub, I am interested in this product: ${product.name} - ₹${product.price}`
  );

  return (
    <>
      <section className="page-hero product-detail-hero">
        <div className="container">
          <Link className="back-link" to="/shop">
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="container product-detail-grid">
          <div className="product-detail-image">
            <div className="detail-badge">♻️ Refurbished Product</div>
            <span>{product.emoji}</span>
            <small>Actual product image will come here later</small>
          </div>

          <div className="product-detail-content">
            <div className="product-category-label">{product.category}</div>

            <h1>{product.name}</h1>

            <div className="detail-price">
              ₹{product.price.toLocaleString("en-IN")}
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-status-grid">
              <div>
                <BadgeCheck size={20} />
                <span>
                  <strong>Revival Score</strong>
                  {product.score}%
                </span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>
                  <strong>Condition</strong>
                  {product.condition}
                </span>
              </div>

              <div>
                <ShieldCheck size={20} />
                <span>
                  <strong>Testing</strong>
                  Quality Checked
                </span>
              </div>
            </div>

            <div className="detail-notice">
              <Wrench size={21} />
              <div>
                <strong>Service Support Available</strong>
                <p>
                  Warranty is not provided. Product received condition-la issue
                  irundha inspection-ku apram rework support available.
                </p>
              </div>
            </div>

            <div className="detail-actions">
              <a
                className="btn btn-primary"
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
              </a>

              <Link className="btn btn-light" to="/contact">
                <ShoppingBag size={18} />
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        <div className="container detail-extra-section">
          <h2>Refurbishment Details</h2>

          <div className="detail-extra-grid">
            <div>
              <span>01</span>
              <h3>Inspection</h3>
              <p>Product parts and working condition inspected.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Repair & Cleaning</h3>
              <p>Required repair, cleaning and component checks completed.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Final Testing</h3>
              <p>Basic working test completed before listing for sale.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}