import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaInstagram, FaTiktok, FaShoppingCart } from 'react-icons/fa'; // Make sure react-icons installed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Section: Logo + Icons */}
        <div className="footer-left">
          <div className="footer-logo">cushki</div>
          <div className="footer-icons">
            <Link to="/"><FaInstagram /></Link>
            <Link to="/"><FaTiktok /></Link>
            <Link to="/cart"><FaShoppingCart /></Link> 
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="footer-links">
          
          <div className="footer-column">
            <h4>SHOP</h4>
            <Link to="/shop-classic">The Cushki Classic</Link>
            <Link to="/pod">The Cushki Pod</Link>
            <Link to="/accessories">Accessories</Link>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <Link to="/why-cushki">Why Cushki</Link>
            <Link to="/see-builds">See Builds</Link>
            <Link to="/our-fabric">Our Fabric</Link>
          </div>

          <div className="footer-column">
            <h4>CUSTOMER CARE</h4>
            <Link to="/faq?tab=care">FAQ</Link>
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

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-tagline">
          Your Couch.<br />Their Kingdom.
        </p>
        <p className="footer-copy">
          © 2025 CUSHKI. Designed for Play in Singapore.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
