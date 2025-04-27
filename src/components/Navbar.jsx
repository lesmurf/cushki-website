import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="announcement-bar">
        🎉 Free shipping on all orders over $100! 🎉
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src="/assets/CUSHKI.png" alt="Cushki Logo" className="logo-img" />
          </a>
        </div>

        <ul className="navbar-links">
          {/* Each nav-item wraps link + dropdown together */}
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('classic')} onMouseLeave={handleMouseLeave}>
            <span>The Classic ▼</span>
            {activeDropdown === 'classic' && (
              <div className="dropdown">
                <Link to="/shop-classic">The Cushki Classic</Link>
                <Link to="/big-orange-box-set">Big Orange Box Set</Link>
                <Link to="/classic-cover-sets">Classic Cover Sets</Link>
                <Link to="/classic-liner-sets">Classic Liner Sets</Link>
              </div>
            )}
          </li>

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('chunk')} onMouseLeave={handleMouseLeave}>
            <span>The Chunk ▼</span>
            {activeDropdown === 'chunk' && (
              <div className="dropdown">
                <a href="#">The Chunk</a>
                <a href="#">Big Orange Box Set</a>
                <a href="#">Chunk Cover Sets</a>
                <a href="#">Chunk Liner Sets</a>
              </div>
            )}
          </li>

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('accessories')} onMouseLeave={handleMouseLeave}>
            <span>Accessories ▼</span>
            {activeDropdown === 'accessories' && (
              <div className="dropdown">
                <a href="#">Pillows</a>
                <a href="#">Extra Cushions</a>
              </div>
            )}
          </li>

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('explore')} onMouseLeave={handleMouseLeave}>
            <span>Explore ▼</span>
            {activeDropdown === 'explore' && (
              <div className="dropdown">
                <a href="#">Gallery</a>
                <a href="#">Moments</a>
                <a href="#">Wall of Love</a>
              </div>
            )}
          </li>

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('support')} onMouseLeave={handleMouseLeave}>
            <span>Support ▼</span>
            {activeDropdown === 'support' && (
              <div className="dropdown">
                <a href="#">FAQs</a>
                <a href="#">Warranty</a>
                <a href="#">Contact Us</a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
