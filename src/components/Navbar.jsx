import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
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
      label: 'The Classic',
      key: 'classic',
      links: [
        { path: '/shop-classic', label: 'The Cushki Classic' },
        { path: '/classic-fabric-sets', label: 'Classic Cover Sets' },
        { path: '/classic-liner-sets', label: 'Classic Liner Sets' },
      ],
    },
    {
      label: 'The Pod™',
      key: 'pod',
      links: [
        { path: '/pod', label: 'The Cushki Pod™' },
        { path: '/pod-fabric-sets', label: 'Pod™ Cover Sets' },
        { path: '/pod-liner-sets', label: 'Pod™ Liner Sets' },
      ],
    },
    {
      label: 'Accessories',
      key: 'accessories',
      links: [
        { path: '#', label: 'Pillows' },
        { path: '#', label: 'Extra Cushions' },
      ],
    },
    {
      label: 'Explore',
      key: 'explore',
      links: [
        { path: '/why-cushki', label: 'Why Cushki' },
        { path: '/see-builds', label: 'See Builds' },
        { path: '/our-fabric', label: 'Our Fabric' },
      ],
    },
    {
      label: 'Support',
      key: 'support',
      links: [
        { path: '/faq?tab=care', label: 'FAQ Care' },
        { path: '/faq?tab=shipping', label: 'FAQ Shipping' },
        { path: '/faq?tab=returns', label: 'FAQ Returns & Warranty' },
        { path: '/faq?tab=safety', label: 'FAQ Use & Safety' },
        { path: '/contact', label: 'Contact Us' },
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
            <img src="/assets/cushki-logo.svg" alt="Cushki Logo" className="logo-img" />
          </Link>
        </div>

        <ul className="navbar-links">
          {menuItems.map(({ key, label, links }) => (
            <li
              key={key}
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span>{label} ▼</span>
              {activeDropdown === key && (
                <div className="dropdown">
                  {links.map(({ path, label }) => (
                    <Link to={path} key={`${key}-${label}`}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <div className="cart-icon-wrapper" onClick={onCartClick} aria-label="View cart">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </div>

          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {/* ✕ Close Button */}
          <button
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ✕
          </button>

          {activeSubMenu === null ? (
            menuItems.map(({ key, label }) => (
              <div key={key} className="mobile-menu-section">
                <div
                  className="mobile-menu-title"
                  onClick={() => setActiveSubMenu(key)}
                >
                  {label} <span className="mobile-menu-arrow">›</span>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="mobile-menu-back" onClick={() => setActiveSubMenu(null)}>
                ← Back
              </div>
              {menuItems
                .find((item) => item.key === activeSubMenu)
                ?.links.map(({ path, label }) => (
                  <Link
                    to={path}
                    key={`${activeSubMenu}-${label}`}
                    className="mobile-menu-link"
                    onClick={closeMobileMenu}
                  >
                    {label}
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
