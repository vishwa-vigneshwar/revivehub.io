import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <span>{product.emoji}</span>
        <div className="refurbished-badge">Refurbished</div>
      </div>

      <div className="product-info">
        <div className="product-topline">
          <span>{product.category}</span>
          <span className="condition">{product.condition}</span>
        </div>

        <h3>{product.name}</h3>

        <div className="product-score">
          <BadgeCheck size={16} />
          Revival Score: {product.score}%
        </div>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <Link to={`/shop/${product.id}`}>
            View <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}