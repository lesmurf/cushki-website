import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import ProductFeatures from '../components/ProductFeatures';
import PodAccordions from '../components/PodAccordions';

const colors = {
  Beige: {
    hex: '#f5f5dc',
    image: '/assets/colorToImageProduct/blue1.png',
    name: 'Sandstone',
    description: 'A soft, neutral beige that feels cozy and grounding.',
    variantId: '50582547366208',
    fabric: 'Double-brushed Microsuede',
    stock: 2, 

  },
  Brown: {
    hex: '#a0522d',
    image: '/assets/colorToImageProduct/brown1.png',
    name: 'Cocoacalm',
    description: 'A warm, chocolatey brown for bold yet soothing vibes.',
    variantId: '50582547398976',
    fabric: 'Double-brushed Microsuede',
    stock: 8, 
  },
  Green: {
    hex: '#8FBC8F',
    image: '/assets/colorToImageProduct/green1.png',
    name: 'Mossmelt',
    description: 'A lush moss green that brings the outdoors inside.',
    variantId: '50582547431744',
    fabric: 'Double-brushed Microsuede',
    stock: 8, 
  },
};

const PodPage = ({ addToCart }) => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Beige');

  const allSwatches = Object.keys(colors);

  const availableColors =
    selectedFabric === 'All'
      ? allSwatches
      : allSwatches.filter((c) => colors[c].fabric === selectedFabric);

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    const firstMatch =
      fabric === 'All'
        ? 'Beige'
        : allSwatches.find((c) => colors[c].fabric === fabric);
    setSelectedColor(firstMatch);
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'The Cushki Pod',
      price: 389,
      quantity: 1,
      image: colors[selectedColor].image,
      variantId: colors[selectedColor].variantId,
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
          <h1>The Cushki Pod™</h1>
          <p className="price">$389</p>

          <div className="fabric-filter">
            {['All', 'Double-brushed Microsuede'].map((fabric) => (
              <button
                key={fabric}
                onClick={() => handleFabricChange(fabric)}
                className={selectedFabric === fabric ? 'active' : ''}
              >
                {fabric}
              </button>
            ))}
          </div>

          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> —{' '}
            {colors[selectedColor].description}
          </div>

          {/* Stock Status */}
          {colors[selectedColor].stock === 0 ? (
            <p className="stock-status out">Out of stock</p>
          ) : colors[selectedColor].stock <= 3 ? (
            <p className="stock-status low">Only {colors[selectedColor].stock} left in stock!</p>
          ) : null}

          <div className="color-swatches">
            {availableColors.map((color) => (
              <div
                key={color}
                className={`swatch ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: colors[color].hex }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>

          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={colors[selectedColor].stock === 0}
          >
            {colors[selectedColor].stock === 0 ? 'Out of Stock' : 'Add to Cart - $389'}
          </button>

          <div className="bundle-box">
            Add{' '}
            <Link to="/shop-classic" className="build-box-link">
              The Cushki Classic
            </Link>{' '}
            into your cart and use code <strong>"BIGBUNDLE"</strong> for 15% off!
          </div>

          <div className="free-shipping">
            Free Shipping &{' '}
            <a href="#" className="returns-link">
              30-day Returns
            </a>
          </div>
        </div>
      </div>

      <PodAccordions />
      <ProductFeatures />
    </div>
  );
};

export default PodPage;
