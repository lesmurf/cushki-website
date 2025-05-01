import React, { useState } from 'react';
import '../styles/Accordions.css';

const accordionData = {
  Details: (
    <>
      The Original Play Couch™, built for endless configurations. Featuring four foam pieces — a sturdy base, soft cushion, and two versatile triangle pillows — all wrapped in your choice of washable, durable fabric.
    </>
  ),
  Dimensions: (
    <>
      <img
        src="/assets/dimensions.png"
        alt="Cushki Classic dimensions"
        style={{ maxWidth: '100%', marginBottom: '1rem' }}
      />
      <ul>
        <li>Depth: 33"</li>
        <li>Seat Height: 8.75"</li>
        <li>Length: 66"</li>
        <li>Total Height: 22.25"</li>
      </ul>
    </>
  ),
  Care: (
    <ul>
      <li>Remove covers and zip closed</li>
      <li>Machine wash covers on coldest setting with like colors</li>
      <li>Hang dry to prevent shrinking</li>
      <li>See Care FAQs for full instructions</li>
    </ul>
  ),
  Certifications: (
    <ul>
      <li>GREENGUARD Gold certified</li>
      <li>CertiPUR-US® certified foam</li>
      <li>Passes California's TB-117 standard</li>
      <li>No flame-retardant chemicals</li>
    </ul>
  ),
  'Safety & Use': (
    <>
      <p>The Playtime Playbook:</p>
      <ul>
        <li>Designed for ages 1+ for imagination, exploration, and adventure — not for sleeping!</li>
        <li>Never place heavy items on top when someone is inside or underneath.</li>
        <li>Use in open spaces, not near stairs, and with caution on hard surfaces.</li>
        <li>Adult supervision required. See Safe and Proper Use Manual for details.</li>
      </ul>
    </>
  ),
};

const ClassicAccordions = () => {
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
            aria-expanded={open === key}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggle(key)}
          >
            <span>{key}</span>
            <span className="arrow">{open === key ? '▲' : '▼'}</span>
          </div>
          {open === key && <div className="accordion-content">{accordionData[key]}</div>}
        </div>
      ))}
    </div>
  );
};

export default ClassicAccordions;
