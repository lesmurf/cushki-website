import React from 'react';
import '../styles/ComparisonSection.css';

const ComparisonSection = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-heading">
        <h2>Which Cushki™ is Right for You?</h2>
        <p>Compare the Classic and Chunk — you're minutes away from playtime!</p>
      </div>

      <div className="comparison-cards">
        
        <div className="comparison-card">
          <img src="/assets/heroSlideshow/2.png" alt="Cushki Classic" />
          <h3>Cushki™ Classic</h3>
          <ul>
            <li>4-piece modular sofa</li>
            <li>Perfect for building forts</li>
            <li>Stackable & easy to store</li>
            <li>Soft, durable microsuede covers</li>
          </ul>
          <a href="#" className="comparison-button">SHOP CLASSIC</a> {/* ✅ Add Button */}
        </div>

        <div className="comparison-card">
          <img src="/assets/heroSlideshow/2.png" alt="Cushki Chunk" />
          <h3>Cushki™ Chunk</h3>
          <ul>
            <li>Round modular arches</li>
            <li>Great for balancing, rolling, climbing</li>
            <li>Double-duty as seesaw or crawl space</li>
            <li>Stackable for creative play</li>
          </ul>
          <a href="#" className="comparison-button secondary">SHOP CHUNK</a> {/* ✅ Add Button */}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;

