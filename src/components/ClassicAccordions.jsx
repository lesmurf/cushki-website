import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Accordions.css';

const accordionData = {
  Details: (
    <>
      The Classic Couch, built for endless configurations. Featuring four foam pieces — a sturdy base, soft cushion, and two versatile triangle pillows — all wrapped in your choice of washable, durable fabric.
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
      <li>Remove covers and zip up</li>
      <li>Machine wash covers on coldest setting with colors</li>
      <li>Hang dry to prevent shrinking</li>
      <li><Link to="/faq?tab=care">See Care FAQs</Link> for full instructions</li>
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
      <p>The Cosy Code:</p>
      <ul>
        <li>Built for ages 1 and up — perfect for curious minds and little explorers.</li>
        <li>Don’t stack heavy stuff on top, especially if someone’s inside or under.</li>
        <li>Use it in open areas, away from stairs. Be extra careful on hard floors.</li>
        <li>Always keep an eye out — adult supervision is a must. Check out the <Link to="/safety">Safe Disclaimer</Link> for all the details.</li>
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
