import React, { useState } from 'react';
import '../styles/Accordions.css'; // ✅ Reuse same CSS for now

const accordionData = {
  Details: (
    <>
      A modular arch set built for rolling, rocking, and building. Includes two C-shaped arches and two half-moons — soft yet sturdy for dynamic play and versatile styling.
    </>
  ),
  Dimensions: (
    <>
      <img src="/assets/dimensions.png" alt="Cushki Pod dimensions" style={{ maxWidth: '100%', marginBottom: '1rem' }} />
      <ul>
        <li>Arch Height: 14"</li>
        <li>Arch Width: 32"</li>
        <li>Arch Thickness: 5"</li>
        <li>Each half-moon: 14" x 16"</li>
      </ul>
    </>
  ),
  Care: (
    <ul>
      <li>Zip covers closed before washing</li>
      <li>Machine wash on cold with like colors</li>
      <li>Hang to dry — do not tumble dry</li>
      <li>See Care FAQs for full instructions</li>
    </ul>
  ),
  Certifications: (
    <ul>
      <li>GREENGUARD Gold certified</li>
      <li>CertiPUR-US® certified foam</li>
      <li>Free from flame-retardant chemicals</li>
      <li>Complies with U.S. safety standards</li>
    </ul>
  ),
  'Safety & Use': (
    <>
      <p>Important safety notes:</p>
      <ul>
        <li>Recommended for ages 1+ with adult supervision</li>
        <li>Always use on flat, open surfaces away from stairs</li>
        <li>Do not stack or stand on arches when not stable</li>
        <li>See Safe Play Manual for more details</li>
      </ul>
    </>
  )
};

const PodAccordions = () => {
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

export default PodAccordions;
