import React, { useState } from 'react';
import '../styles/ProductPage.css';
import ProductFeatures from "../components/ProductFeatures"; 
import MiniCart from '../components/MiniCart';

const fabrics = ['All', 'Microsuede', 'Double-brushed Microsuede'];

const allColors = {
  'Microsuede': ['Red', 'Blue', 'Grey'],
  'Double-brushed Microsuede': ['Yellow', 'Green', 'Black'],
};

const allSwatches = ['Red', 'Blue', 'Grey', 'Yellow', 'Green', 'Black'];

const colorToImage = {
  Red: '/assets/colorToImageProduct/red1.png',
  Blue: '/assets/colorToImageProduct/blue1.png',
  Grey: '/assets/colorToImageProduct/grey1.png',
  Yellow: '/assets/colorToImageProduct/yellow1.png',
  Green: '/assets/colorToImageProduct/green1.png',
  Black: '/assets/colorToImageProduct/black1.png',
};

const colorDetails = {
  Red: { name: "Gumball", description: "A happy poppy red in double-brushed microsuede." },
  Blue: { name: "Skywalker", description: "A calm, dreamy sky blue microsuede." },
  Grey: { name: "Stone", description: "A classic neutral grey that fits any playroom." },
  Yellow: { name: "Sunburst", description: "A lively, bright yellow for endless energy." },
  Green: { name: "Seafoam", description: "A mythical sea green double-brushed microsuede." },
  Black: { name: "Midnight", description: "A bold deep black that makes a statement." }
};

// Helper functions
function mapColorToHex(color) {
  switch (color) {
    case 'Red': return '#FF5C5C';
    case 'Blue': return '#5CADFF';
    case 'Grey': return '#A8A8A8';
    case 'Yellow': return '#FFE066';
    case 'Green': return '#8DD694';
    case 'Black': return '#333333';
    default: return '#cccccc';
  }
}

function getVariantId(color) {
  switch (color) {
    case 'Red': return '50579798294848';
    case 'Blue': return '50579798262080';
    case 'Grey': return '50579798393152';
    case 'Yellow': return '50579798327616';
    case 'Green': return '50579798229312';
    case 'Black': return '50579798360384';
    default: return '50579798294848'; 
  }
}

function generateShopifyCartUrl(items) {
  const parts = items.map(item => `${item.variantId}:${item.quantity}`);
  return `https://m1xmy8-2u.myshopify.com/cart/${parts.join(',')}`;
}

const ProductPage = () => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const availableColors = selectedFabric === 'All'
    ? allSwatches
    : allColors[selectedFabric] || [];

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    const firstColor = fabric === 'All' ? 'Red' : allColors[fabric][0];
    setSelectedColor(firstColor);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-page">
      {/* Main Top Section */}
      <div className="product-top">
        <img
          src={colorToImage[selectedColor]}
          alt={selectedColor}
          className="product-image"
        />
        <div className="product-info">
          <h1>The Cushki™ Classic</h1>
          <p className="price">$489</p>

          {/* Fabric Filter */}
          <div className="fabric-filter">
            {fabrics.map(fabric => (
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
            <strong>{colorDetails[selectedColor].name}</strong> — {colorDetails[selectedColor].description}
          </div>

          {/* Color Swatches */}
          <div className="color-swatches">
            {availableColors.map(color => (
              <div
                key={color}
                className={`swatch ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: mapColorToHex(color) }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>

          {/* Add to Cart Button */}
          <button 
            className="add-to-cart" 
            onClick={() => {
              setCartItems([...cartItems, {
                title: 'The Cushki Classic',
                price: 489,
                quantity: 1,
                image: colorToImage[selectedColor],
                variantId: getVariantId(selectedColor),
              }]);
              setShowCart(true);
            }}
          >
            Add to Cart - $489
          </button>

          {/* Upsell Banner */}
          <div className="build-box">
            <a href="#" className="build-box-link">
              Build Your Big Orange Box Set and Save 10%
            </a>
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

      {/* Mini Cart */}
      {showCart && (
        <MiniCart 
          cartItems={cartItems}
          onRemove={(index) => {
            const updated = [...cartItems];
            updated.splice(index, 1);
            setCartItems(updated);
          }}
          onUpdateQuantity={(index, newQuantity) => {
            const updated = [...cartItems];
            if (newQuantity < 1) return; // 🚫 Don't allow 0 or negative
            updated[index].quantity = newQuantity;
            setCartItems(updated);
          }}
          onCheckout={() => {
            const cartUrl = generateShopifyCartUrl(cartItems);
            window.location.href = cartUrl;
          }}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  );
};

const Accordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const sections = ['Details', 'Dimensions', 'Care', 'Certifications', 'Safety & Use'];

  return (
    <div className="accordions">
      {sections.map(section => (
        <div key={section} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(section)}>
            <span>{section}</span>
            <span className="arrow">{openAccordion === section ? '▲' : '▼'}</span>
          </div>
          {openAccordion === section && (
            <div className="accordion-content">
              <p>Sample content for {section} goes here...</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
