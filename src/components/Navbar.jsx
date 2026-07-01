import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "react-icons/fa";
import "../../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container nav-container">

        <Link to="/" className="logo">
          <span className="logo-circle">♻</span>
          <div>
            <h2>ReviveHub</h2>
            <small>Repair • Refurbish • Reuse</small>
          </div>
        </Link>

        <nav className={open ? "nav-links active" : "nav-links"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/sell">Sell</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <button className="nav-btn">
            Get Started
          </button>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}