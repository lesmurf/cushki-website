// PodLinerPage.jsx
import React, { useState } from 'react';
import '../styles/ProductPage.css';

const colors = {
  Beige: {
    hex: '#f5f5dc',
    image: '/assets/liner/beige-liner.png', // 🔥 Update this to correct liner image
    name: 'Sandstone Liner',
    description: 'A cozy beige microsuede liner set, crafted for durability and easy care.',
    variantId: '50582970000128' // 🔥 Replace with real variant ID
  },
  Brown: {
    hex: '#a0522d',
    image: '/assets/liner/brown-liner.png', // 🔥 Update this
    name: 'Cocoacalm Liner',
    description: 'A warm brown liner set for playful spaces and cozy moments.',
    variantId: '50582970032896' // 🔥 Replace with real variant ID
  },
  Green: {
    hex: '#8FBC8F',
    image: '/assets/liner/green-liner.png', // 🔥 Update this
    name: 'Mossmelt Liner',
    description: 'A lush green liner set made to bring nature’s calmness indoors.',
    variantId: '50582970065664' // 🔥 Replace with real variant ID
  },
};

const price = 88; // 🔥 Set your Pod Liner price here

const PodLinerPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Beige');

  const handleAddToCart = () => {
    const selectedVariant = colors[selectedColor];
    addToCart({
      title: 'Cushki Pod Liner Set',
      price: price,
      quantity: 1,
      image: selectedVariant.image,
      variantId: selectedVariant.variantId
    });
  };

  return (
    <div className="product-page">
      <div className="product-top">
        <img
          src={colors[selectedColor].image}
          alt={selectedColor}
          className="product-image"
        />
        <div className="product-info">
          <h1>The Cushki™ Pod Liner Set</h1>
          <p className="price">${price}</p>

          {/* Color Name and Description */}
          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          {/* Color Swatches */}
          <div className="color-swatches">
            {Object.entries(colors).map(([colorKey, colorData]) => (
              <div
                key={colorKey}
                className={`swatch ${selectedColor === colorKey ? 'active' : ''}`}
                style={{ backgroundColor: colorData.hex }}
                onClick={() => setSelectedColor(colorKey)}
              />
            ))}
          </div>

          {/* Add to Cart */}
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - ${price}
          </button>

          {/* Shipping Info */}
          <div className="free-shipping">
            Free Shipping & <a href="#" className="returns-link">30-day Returns</a>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <PodLinerAccordions />

    </div>
  );
};

export default PodLinerPage;

// Accordion component
const PodLinerAccordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionData = {
    'Material': (
      <>
        Premium microsuede liners designed for breathability, protection, and easy care.
      </>
    ),
    'Care Instructions': (
      <>
        <ul>
          <li>Machine wash cold with like colors.</li>
          <li>Zip closed before washing.</li>
          <li>Hang dry only to prevent shrinking and maintain softness.</li>
        </ul>
      </>
    ),
    'Shipping & Returns': (
      <>
        <p>Ships within 3-5 business days. Free shipping for orders above $100.</p>
        <p>30-day returns available. See full return policy for more info.</p>
      </>
    ),
  };

  return (
    <div className="accordions">
      {Object.keys(accordionData).map((section) => (
        <div key={section} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(section)}>
            <span>{section}</span>
            <span className="arrow">{openAccordion === section ? '▲' : '▼'}</span>
          </div>
          {openAccordion === section && (
            <div className="accordion-content">
              {accordionData[section]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
