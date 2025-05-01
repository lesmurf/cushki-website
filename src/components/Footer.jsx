import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaInstagram, FaTiktok, FaShoppingCart } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/cushki' },
  { icon: <FaTiktok />, label: 'TikTok', href: 'https://www.tiktok.com/@cushki' },
  { icon: <FaShoppingCart />, label: 'Cart', to: '/cart' },
];

const footerMenus = [
  {
    title: 'SHOP',
    links: [
      { label: 'The Cushki Classic', path: '/shop-classic' },
      { label: 'The Cushki Pod', path: '/pod' },
      { label: 'Accessories', path: '/accessories' },
    ],
  },
  {
    title: 'EXPLORE',
    links: [
      { label: 'Why Cushki', path: '/why-cushki' },
      { label: 'See Builds', path: '/see-builds' },
      { label: 'Our Fabric', path: '/our-fabric' },
    ],
  },
  {
    title: 'CUSTOMER CARE',
    links: [
      { label: 'FAQ', path: '/faq?tab=care' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Shipping Info', path: '/shipping' },
      { label: 'Returns & Warranty', path: '/returns' },
    ],
  },
  {
    title: 'OUR POLICIES',
    links: [
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Safety Disclaimer', path: '/safety' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Logo + Social Icons */}
        <div className="footer-left">
          <div className="footer-logo">cushki</div>
          <div className="footer-icons">
            {socialLinks.map((item, index) =>
              item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ) : (
                <Link key={index} to={item.to} aria-label={item.label}>
                  {item.icon}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right Section: Link Columns */}
        <div className="footer-links">
          {footerMenus.map(({ title, links }) => (
            <div className="footer-column" key={title}>
              <h4>{title}</h4>
              {links.map(({ label, path }) => (
                <Link to={path} key={label}>{label}</Link>
              ))}
            </div>
          ))}
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
