import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // ✅ Make sure react-icons is installed
import '../styles/Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      label: "The Classic",
      key: "classic",
      links: [
        { path: "/shop-classic", label: "The Cushki Classic" },
        { path: "/classic-fabric-sets", label: "Classic Cover Sets" },
        { path: "/classic-liner-sets", label: "Classic Liner Sets" },
      ],
    },
    {
      label: "The Pod™",
      key: "Pod",
      links: [
        { path: "/Pod", label: "The Cushki Pod™" },
        { path: "/pod-fabric-sets", label: "Pod™ Cover Sets" },
        { path: "/pod-liner-sets", label: "Pod™ Liner Sets" },
      ],
    },
    {
      label: "Accessories",
      key: "accessories",
      links: [
        { path: "#", label: "Pillows" },
        { path: "#", label: "Extra Cushions" },
      ],
    },
    {
      label: "Explore",
      key: "explore",
      links: [
        { path: "/why-cushki", label: "Why Cushki" },
        { path: "/see-builds", label: "See Builds" },
        { path: "#", label: "Wall of Love" },
      ],
    },
    {
      label: "Support",
      key: "support",
      links: [
        { path: "/faq", label: "FAQs" },
        { path: "/shipping-returns", label: "Shipping & Returns" },
        { path: "/warranty", label: "Warranty" },
        { path: "/care", label: "Care Instructions" },
        { path: "/terms", label: "Terms & Conditions" },
      ],
    },
  ];

  return (
    <>
      <div className="announcement-bar">
        🎉 Free shipping on all orders over $100! 🎉
      </div>

      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src="/assets/CUSHKI.png" alt="Cushki Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navbar Links - Auto-generated */}
        <ul className="navbar-links">
          {menuItems.map((menu) => (
            <li
              key={menu.key}
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(menu.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span>{menu.label} ▼</span>
              {activeDropdown === menu.key && (
                <div className="dropdown">
                  {menu.links.map((link, index) => (
                    <Link to={link.path} key={index}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Cart Icon */}
        <div className="cart-icon-wrapper" onClick={onCartClick}>
          <FaShoppingCart className="cart-icon" />
          {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
