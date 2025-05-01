import React, { useState } from 'react';
import '../styles/Accordions.css';

const accordionData = {
  Material: (
    <>Premium double-brushed microsuede fabrics crafted for softness, durability, and breathability.</>
  ),
  'Care Instructions': (
    <ul>
      <li>Remove covers and zip closed before washing.</li>
      <li>Machine wash cold with like colors.</li>
      <li>Hang dry only to prevent shrinking and maintain softness.</li>
    </ul>
  ),
  'Shipping & Returns': (
    <>
      <p>Ships within 3–5 business days. Free shipping for orders above $100.</p>
      <p>30-day returns available. See full policy for details.</p>
    </>
  ),
};

const PodFabricAccordions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <div className="accordions">
      {Object.keys(accordionData).map((key) => (
        <div key={key} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggle(key)}
            role="button"
            tabIndex={0}
            aria-expanded={open === key}
            onKeyDown={(e) => e.key === 'Enter' && toggle(key)}
          >
            <span>{key}</span>
            <span className="arrow">{open === key ? '▲' : '▼'}</span>
          </div>
          {open === key && (
            <div className="accordion-content">{accordionData[key]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PodFabricAccordions;
