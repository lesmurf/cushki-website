import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="announcement-bar">
        FREE shipping on ALL orders!
      </div>
      <nav className="navbar">
        <div className="logo">cushki</div>
        <ul className="nav-links">
          <li><a href="#designs">Past Designs</a></li>
          <li><a href="#wall">Wall of Love</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="cart-icon">🛒</div>
      </nav>
    </>
  );
};

export default Navbar;
