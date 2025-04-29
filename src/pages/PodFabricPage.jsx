// PodFabricPage.jsx
import React, { useState } from 'react';
import '../styles/ProductPage.css';

const colors = {
  Beige: {
    hex: '#f5f5dc',
    image: '/assets/fabric/beige-fabric.png', // 🔥 Update this to correct fabric image
    name: 'Sandstone Fabric',
    description: 'A cozy beige microsuede fabric set, crafted for versatility and comfort.',
    variantId: '50582960035936' // 🔥 Use real variant ID here
  },
  Brown: {
    hex: '#a0522d',
    image: '/assets/fabric/brown-fabric.png', // 🔥 Update
    name: 'Cocoacalm Fabric',
    description: 'A warm brown microsuede fabric set made for stylish lounging and sturdy play.',
    variantId: '50582960068704' // 🔥 Use real variant ID here
  },
  Green: {
    hex: '#8FBC8F',
    image: '/assets/fabric/green-fabric.png', // 🔥 Update
    name: 'Mossmelt Fabric',
    description: 'A lush moss green microsuede fabric set for a calming, natural vibe.',
    variantId: '50582960101472' // 🔥 Use real variant ID here
  },
};

const price = 138; // 🔥 Set your Pod Fabric price here

const PodFabricPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Beige');

  const handleAddToCart = () => {
    const selectedVariant = colors[selectedColor];
    addToCart({
      title: 'Cushki Pod Fabric Set',
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
          <h1>The Cushki™ Pod Fabric Set</h1>
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
      <PodFabricAccordions />

    </div>
  );
};

export default PodFabricPage;

// Accordion component
const PodFabricAccordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionData = {
    'Material': (
      <>
        Premium double-brushed microsuede fabrics crafted for softness, durability, and breathability.
      </>
    ),
    'Care Instructions': (
      <>
        <ul>
          <li>Remove covers and zip closed before washing.</li>
          <li>Machine wash cold with like colors.</li>
          <li>Hang dry only to prevent shrinking and maintain softness.</li>
        </ul>
      </>
    ),
    'Shipping & Returns': (
      <>
        <p>Ships within 3-5 business days. Free shipping for orders above $100.</p>
        <p>30-day returns available. See full policy for details.</p>
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
