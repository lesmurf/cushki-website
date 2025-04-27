import React from 'react';
import '../styles/BadgesSection.css';

const badges = [
  { emoji: '⭐', label: 'Trusted by Families' },
  { emoji: '🧸', label: 'Kid-Friendly' },
  { emoji: '🛡️', label: 'Safe Materials' },
  { emoji: '🧹', label: 'Easy to Clean' },
  { emoji: '🎨', label: 'Creative Play' },
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
            <div className="badge-icon">{badge.emoji}</div>
            <div className="badge-label">{badge.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BadgesSection;
