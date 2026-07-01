import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

const categories = [
  "All",
  "Fans",
  "Mixers",
  "UPS & Inverters",
  "Batteries",
  "LED Lights",
  "Motors",
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="mini-label">REVIVEHUB STORE</p>
          <h1 className="page-title">Shop Refurbished Products</h1>
          <p className="section-subtitle">
            Old products, carefully repaired and tested for useful everyday use.
            No warranty. Rework support may be available after inspection.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shop-toolbar">
            <div className="search-box">
              <Search size={19} />
              <input
                type="text"
                placeholder="Search fan, mixer, UPS..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="filter-label">
              <SlidersHorizontal size={18} />
              Filter Products
            </div>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="result-count">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </p>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>🔎</span>
              <h3>No products found</h3>
              <p>Try another product name or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}