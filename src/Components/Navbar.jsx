import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Brand */}

      <Link
        to="/"
        className="navbar-brand"
        onClick={closeMenu}
      >
        <h1>ADESOLA TECH</h1>
      </Link>

      {/* Mobile menu button */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation */}

      <nav className={menuOpen ? "active" : ""}>
        <ul>

          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/About" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/Project" onClick={closeMenu}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/Contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Navbar;