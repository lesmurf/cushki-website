import React from 'react';
import { Link } from 'react-router-dom';
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
            <a href="/shop-classic">The Cushki Classic</a>
            <a href="/pod">The Cushki Pod</a>
            <a href="#">Accessories</a>
          </div>
          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="/why-cushki">Why Cushki</a>
            <a href="/see-builds">See Builds</a>
            <a href="/our-fabric">Our Fabric</a>
          </div>
          <div className="footer-column">
            <h4>CUSTOMER CARE</h4>
            <a href="/faq?tab=care">FAQ</a>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shipping">Shipping Info</Link>
            <Link to="/returns">Returns & Warranty</Link>
          </div>
          <div className="footer-column">
            <h4>OUR POLICIES</h4>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/safety">Safety Disclaimer</Link>
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
