import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubMenu(null);
  };

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
        { path: "/pod", label: "The Cushki Pod™" },
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
        { path: "/our-fabric", label: "Our Fabric" },
      ],
    },
    {
      label: "Support",
      key: "support",
      links: [
        { path: "/faq?tab=care", label: "FAQ Care" },
        { path: "/faq?tab=shipping", label: "FAQ Shipping" },
        { path: "/faq?tab=returns", label: "FAQ Returns & Warranty" },
        { path: "/faq?tab=safety", label: "FAQ Use & Safety" },
      ],
    },
  ];

  return (
    <>
      <div className="announcement-bar">
        🎉 Free shipping on all orders over $100! 🎉
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/assets/CUSHKI.png" alt="Cushki Logo" className="logo-img" />
          </Link>
        </div>

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

        <div className="navbar-icons">
          <div className="cart-icon-wrapper" onClick={onCartClick}>
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </div>

          <div className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {activeSubMenu === null ? (
            menuItems.map((menu) => (
              <div key={menu.key} className="mobile-menu-section">
                <div
                  className="mobile-menu-title"
                  onClick={() => setActiveSubMenu(menu.key)}
                >
                  {menu.label} <span className="mobile-menu-arrow">›</span>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="mobile-menu-back" onClick={() => setActiveSubMenu(null)}>
                ← Back
              </div>
              {menuItems
                .find((menu) => menu.key === activeSubMenu)
                ?.links.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    onClick={closeMobileMenu}
                    className="mobile-menu-link"
                  >
                    {link.label}
                  </Link>
                ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
