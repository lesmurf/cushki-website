// PodPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css'; 
import ProductFeatures from "../components/ProductFeatures";

const colors = {
  Beige: {
    hex: '#f5f5dc',
    image: '/assets/colorToImageProduct/blue1.png',
    name: 'Sandstone',
    description: 'A soft, neutral beige that feels cozy and grounding.',
    variantId: '50582547366208',
    fabric: 'Double-brushed Microsuede'
  },
  Brown: {
    hex: '#a0522d',
    image: '/assets/colorToImageProduct/brown1.png',
    name: 'Cocoacalm',
    description: 'A warm, chocolatey brown for bold yet soothing vibes.',
    variantId: '50582547398976',
    fabric: 'Double-brushed Microsuede'
  },
  Green: {
    hex: '#8FBC8F',
    image: '/assets/colorToImageProduct/green1.png',
    name: 'Mossmelt',
    description: 'A lush moss green that brings the outdoors inside.',
    variantId: '50582547431744',
    fabric: 'Double-brushed Microsuede'
  },
};

const PodPage = ({ addToCart }) => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Beige'); // default color

  const allSwatches = Object.keys(colors);

  const availableColors = selectedFabric === 'All'
    ? allSwatches
    : allSwatches.filter(c => colors[c].fabric === selectedFabric);

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    const firstColor = fabric === 'All' ? 'Beige' : allSwatches.find(c => colors[c].fabric === fabric);
    setSelectedColor(firstColor);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'The Cushki Pod',
      price: 389,
      quantity: 1,
      image: colors[selectedColor].image,
      variantId: colors[selectedColor].variantId
    });
  };

  return (
    <div className="product-page">
      {/* Main Top Section */}
      <div className="product-top">
        <img
          src={colors[selectedColor].image}
          alt={selectedColor}
          className="product-image"
        />
        <div className="product-info">
          <h1>The Cushki Pod™</h1>
          <p className="price">$389</p>

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
            Add to Cart - $389
          </button>

          {/* Upsell Banner */}
          <div className="bundle-box">
            Add <Link to="/shop-classic" className="build-box-link">The Cushki Classic</Link> into your cart and use code <strong>"BIGBUNDLE"</strong> for 15% off!
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

export default PodPage;

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
