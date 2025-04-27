import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaTiktok, FaShoppingCart } from 'react-icons/fa'; // 👈 install react-icons if not yet

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <div className="footer-logo">cushki</div>
          <div className="footer-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaShoppingCart /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>SHOP</h4>
            <a href="#">The Collection</a>
            <a href="#">The Gallery</a>
            <a href="#">The Keepsake</a>
          </div>
          <div className="footer-column">
            <h4>INFO</h4>
            <a href="#">How it works</a>
            <a href="#">About Us</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer-column">
            <h4>CONNECT</h4>
            <a href="#">Contact Us</a>
            <a href="#">Share Your Story</a>
            <a href="#">Collaborate With Us</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-tagline">Your Couch.<br />Their Kingdom.</p>
        <p className="footer-copy">© 2025 CUSHKI. Designed for Play in Singapore.</p>
      </div>
    </footer>
  );
};

export default Footer;
