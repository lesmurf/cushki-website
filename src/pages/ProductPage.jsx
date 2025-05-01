// ProductPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import ProductFeatures from "../components/ProductFeatures";


const colors = {
  Blue: {
    hex: '#5CADFF',
    image: '/assets/colorToImageProduct/blue1.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space',
    variantId: '50582549168448',
    fabric: 'Double-brushed Microsuede'
  },
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/colorToImageProduct/grey1.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50579798393152',
    fabric: 'Double-brushed Microsuede'
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/colorToImageProduct/yellow1.png',
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50579798327616',
    fabric: 'Double-brushed Microsuede'
  },
};

const ProductPage = ({ addToCart }) => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Blue');

  const allSwatches = Object.keys(colors);

  const availableColors = selectedFabric === 'All'
    ? allSwatches
    : allSwatches.filter(c => colors[c].fabric === selectedFabric);

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    const firstColor = fabric === 'All' ? allSwatches[0] : allSwatches.find(c => colors[c].fabric === fabric);
    setSelectedColor(firstColor);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'The Cushki Classic',
      price: 489,
      quantity: 1,
      image: colors[selectedColor].image,
      variantId: colors[selectedColor].variantId
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
          <h1>The Cushki™ Classic</h1>
          <p className="price">$489</p>

          {/* Fabric Filter */}
          <div className="fabric-filter">
            {['All', 'Double-brushed Microsuede'].map(fabric => (
              <button
                key={fabric}
                onClick={() => handleFabricChange(fabric)}
                className={selectedFabric === fabric ? 'active' : ''}
              >
                {fabric}
              </button>
            ))}
          </div>

          {/* Selected Color Name and Description */}
          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          {/* Color Swatches */}
          <div className="color-swatches">
            {availableColors.map(color => (
              <div
                key={color}
                className={`swatch ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: colors[color].hex }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - $489
          </button>

          {/* Upsell Bundle Box */}
          <div className="bundle-box">
            Add <Link to="/Pod" className="build-box-link">The Cushki Pod™</Link> into your cart and use code <strong>"BIGBUNDLE"</strong> for 15% off!
          </div>

          {/* Shipping Info */}
          <div className="free-shipping">
            Free Shipping & <a href="#" className="returns-link">30-day Returns</a>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <Accordions />

      {/* Product Features */}
      <ProductFeatures />

    </div>
  );
};

export default ProductPage;

// Accordion component
const Accordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionData = {
    Details: (
      <>
        The Original Play Couch™, built for endless configurations. Featuring four foam pieces — a sturdy base, soft cushion, and two versatile triangle pillows — all wrapped in your choice of washable, durable fabric.
      </>
    ),
    Dimensions: (
      <>
        <img src="/assets/dimensions.png" alt="Dimensions" style={{ maxWidth: '100%', marginBottom: '1rem' }} />
        <ul>
          <li>Depth: 33"</li>
          <li>Seat Height: 8.75"</li>
          <li>Length: 66"</li>
          <li>Total Height: 22.25"</li>
        </ul>
      </>
    ),
    Care: (
      <>
        <ul>
          <li>Remove covers and zip closed</li>
          <li>Machine wash covers on coldest setting with like colors</li>
          <li>Hang dry to prevent shrinking</li>
          <li>See Care FAQs for full instructions</li>
        </ul>
      </>
    ),
    Certifications: (
      <>
        <ul>
          <li>GREENGUARD Gold certified</li>
          <li>CertiPUR-US® certified foam</li>
          <li>Passes California's TB-117 standard</li>
          <li>No flame-retardant chemicals</li>
        </ul>
      </>
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
    )
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
