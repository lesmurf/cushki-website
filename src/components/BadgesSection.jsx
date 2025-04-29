import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../styles/BadgesSection.css';

const badges = [
  { image: '/assets/5badges/TrustedbyFamilies.png', label: 'Trusted by Families' },
  { image: '/assets/5badges/KidFriendly.png', label: 'Kid-Friendly' },
  { image: '/assets/5badges/Safequalitymaterials.png', label: 'Safe Materials' },
  { image: '/assets/5badges/EasytoClean.png', label: 'Easy to Clean' },
  { image: '/assets/5badges/CreativePlay.png', label: 'Creative Play' },
];

const BadgesSection = () => {
  return (
    <section className="badges-section">
      <div className="badges-heading">
        <h2>Built for Play. Trusted by Parents.</h2>
        <p>Thousands of playful hours and counting — discover why families love Cushki™.</p>
      </div>

      <div className="badges-grid">
        {badges.map((badge, index) => (
          <div key={index} className="badge">
            <img src={badge.image} alt={badge.label} className="badge-icon" />
            <div className="badge-label">{badge.label}</div>
          </div>
        ))}
      </div>

      {/* ✅ New Button */}
      <div className="badges-button-wrapper">
        <Link to="/why-cushki" className="learn-more-button">
          Learn More About Cushki
        </Link>
      </div>

    </section>
  );
};

export default BadgesSection;

