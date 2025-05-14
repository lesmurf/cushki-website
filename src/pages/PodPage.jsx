import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import ProductFeatures from '../components/ProductFeatures';
import PodAccordions from '../components/PodAccordions';

const colors = {
  Beige: {
    hex: '#f5f5dc',
    images: ['/assets/podImages/CPbeige1.png','/assets/podImages/CPbeige2.png'],
    name: 'Sandstone',
    description: 'A soft, neutral beige that feels cozy and grounding.',
    variantId: '50582547366208',
    fabric: 'Double-brushed Microsuede',
    stock: 2,
  },
  Brown: {
    hex: '#D3D3D3',
    images: ['/assets/podImages/CPgrey1.png','/assets/podImages/CPgrey2.png'],
    name: 'Cocoacalm',
    description: 'A warm, chocolatey brown for bold yet soothing vibes.',
    variantId: '50582547398976',
    fabric: 'Double-brushed Microsuede',
    stock: 8,
  },
  Green: {
    hex: '#344334',
    images: ['/assets/podImages/CPmoss1.png','/assets/podImages/CPmoss2.png'],
    name: 'Mossmelt',
    description: 'A lush moss green that brings the outdoors inside.',
    variantId: '50582547431744',
    fabric: 'Double-brushed Microsuede',
    stock: 8,
  },
  Grey: {
    hex: '#f5f5dc',
    images: ['/assets/colorToImageProduct/blue1.png'],
    name: 'Grey',
    description: 'A soft, neutral beige that feels cozy and grounding.',
    variantId: '50582547366208',
    fabric: 'Corduroy',
    stock: 0,
  },
  DarkBlue: {
    hex: '#a0522d',
    images: ['/assets/colorToImageProduct/brown1.png'],
    name: 'DarkBlue',
    description: 'A warm, chocolatey brown for bold yet soothing vibes.',
    variantId: '50582547398976',
    fabric: 'Corduroy',
    stock: 1,
  },
  BabyPurple: {
    hex: '#8FBC8F',
    images: ['/assets/colorToImageProduct/green1.png'],
    name: 'BabyPurple',
    description: 'A lush moss green that brings the outdoors inside.',
    variantId: '50582547431744',
    fabric: 'Corduroy',
    stock: 0,
  },
};

const PodPage = ({ addToCart }) => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Beige');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
    setActiveImageIndex(0);
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'The Cushki Pod',
      price: 389,
      quantity: 1,
      image: colors[selectedColor].images[0],
      variantId: colors[selectedColor].variantId,
    });
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? colors[selectedColor].images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === colors[selectedColor].images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="product-page">
      <div className="product-main">
        {/* Image Section */}
        <div className="product-gallery">
          <button className="nav-arrow left" onClick={handlePrevImage}>
            &#8249;
          </button>
          <img
            src={colors[selectedColor].images[activeImageIndex]}
            alt={selectedColor}
            className="main-product-image"
          />
          <button className="nav-arrow right" onClick={handleNextImage}>
            &#8250;
          </button>
        </div>

        {/* Info Panel */}
        <div className="product-info-panel">
          <h1>The Cushki Pod™</h1>
          <p className="price">$389</p>

          <div className="fabric-filter">
            {['All', 'Double-brushed Microsuede', 'Corduroy'].map((fabric) => (
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
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          {/* Stock */}
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
                onClick={() => {
                  setSelectedColor(color);
                  setActiveImageIndex(0);
                }}
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
            Add <Link to="/shop-classic" className="build-box-link">The Cushki Classic</Link> into your cart and use code <strong>"BIGBUNDLE"</strong> for 15% off!
          </div>

          <div className="free-shipping">
            Free Shipping &{' '}
            <Link to="#" className="returns-link">
              30-day Returns
            </Link>
          </div>
        </div>
      </div>

      <PodAccordions />
      <ProductFeatures />
    </div>
  );
};

export default PodPage;
