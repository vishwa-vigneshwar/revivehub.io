import { Link, NavLink } from "react-router-dom";
import { Menu, X, Wrench } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Service", path: "/service" },
  { name: "Sell Old Item", path: "/sell" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
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

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link to="/service" className="nav-service-btn">
          Request Service
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}