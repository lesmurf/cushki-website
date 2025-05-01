import React, { useState } from 'react';
import '../styles/Accordions.css';

const accordionData = {
  Material: (
    <>Premium microsuede liners crafted for breathability, durability, and easy care.</>
  ),
  'Care Instructions': (
    <ul>
      <li>Machine wash cold on delicate cycle.</li>
      <li>Zip closed before washing.</li>
      <li>Hang dry only to maintain original shape.</li>
    </ul>
  ),
  'Shipping & Returns': (
    <>
      <p>Ships within 3–5 business days. Free shipping for orders above $100.</p>
      <p>30-day returns. See our return policy for full details.</p>
    </>
  ),
};

const ClassicLinerAccordions = () => {
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

export default ClassicLinerAccordions;
