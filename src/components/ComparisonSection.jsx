import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ComparisonSection.css';

const products = [
  {
    name: 'Cushki Classic',
    image: '/assets/comparisonImages/CCpastelblue.png',
    features: [
      'The original, reimagined.',
      '4 modular blocks — two bases, two triangles.',
      'Made to grow with your imagination.',
      'Best for: Bigger builds, structured play, everyday lounging.',
    ],
    buttonText: 'SHOP CLASSIC',
    route: '/shop-classic',
    buttonStyle: 'comparison-button',
  },
  {
    name: 'Cushki Pod™',
    image: '/assets/comparisonImages/CPmossgreen.png',
    features: [
      'Soft curves. Endless movement.',
      '4 round stackable arches built for rolling, flipping, and flowing with your day.',
      'From naptime to playtime, the Pod adapts',
      'Best for: Open-ended play, small spaces, and doubling as a table.',
    ],
    buttonText: 'SHOP POD™',
    route: '/pod',
    buttonStyle: 'comparison-button secondary',
  },
];

const ComparisonSection = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-heading">
        <h2>Find Your Perfect Fit.</h2>
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
