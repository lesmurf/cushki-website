import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ComparisonSection.css';

const products = [
  {
    name: 'Cushki Classic',
    image: '/assets/heroSlideshow/2.png',
    features: [
      '4-piece modular sofa',
      'Made for creating anything your mind dreams up.',
      'Stackable & easy to store',
      'Soft, durable microsuede covers',
    ],
    buttonText: 'SHOP CLASSIC',
    route: '/shop-classic', // ✅ Replace with your actual route
    buttonStyle: 'comparison-button',
  },
  {
    name: 'Cushki Pod™',
    image: '/assets/heroSlideshow/2.png',
    features: [
      '4-piece modular sofa',
      'Soft, stackable round arches',
      'Flip it, stack it, roll it',
      'From table to nap spot. It adapts to you.',
    ],
    buttonText: 'SHOP POD™',
    route: '/pod', // ✅ Replace with your actual route
    buttonStyle: 'comparison-button secondary',
  },
];

const ComparisonSection = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-heading">
        <h2>Which Cushki is Right for You?</h2>
        <p>Compare the Classic and Pod — you're minutes away from your next cosy corner!</p>
      </div>

      <div className="comparison-cards">
        {products.map(({ name, image, features, buttonText, route, buttonStyle }) => (
          <div key={name} className="comparison-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <ul>
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link to={route} className={buttonStyle}>
              {buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
