import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import ProductFeatures from '../components/ProductFeatures';
import PodAccordions from '../components/PodAccordions';

const colors = {
  Beige: {
    hex: '#D6C5A8',
    images: [
      '/assets/podImages/CPbeige1.png',
      '/assets/podImages/CPbeige2.png',
    ],
    name: 'Oat',
    description: 'A creamy oat beige that brings softness and simplicity to any space. Calm, cozy, and quietly elegant — made to blend in, but never disappear.',
    variantId: '50652104687936',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  DarkGrey: {
    hex: '#4A4A4A',
    images: [
      '/assets/podImages/CPdarkgrey1.png',
      '/assets/podImages/CPdarkgrey2.png',
    ],
    name: 'Slatehug',
    description: 'A rich charcoal grey that wraps your space in calm and comfort. Minimal, modern, and quietly strong — built to ground any room with effortless style.',
    variantId: '50652104720704',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  Green: {
    hex: '#6E9B89',
    images: [
      '/assets/podImages/CPgreen1.png',
      '/assets/podImages/CPgreen2.png',
    ],
    name: 'Sagemelt',
    description: 'A muted sage green with a hint of grey, Sagemelt brings the quiet calm of nature indoors. Soft, grounding, and endlessly versatile — it’s the color of slow mornings, cozy moments, and intentional play.',
    variantId: '50652152004928',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  Grey: {
    hex: '#A8A8A8',
    images: [
      '/assets/podImages/CPgrey1.png',
      '/assets/podImages/CPgrey2.png',
    ],
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50652104622400',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  Navy: {
    hex: '#4A6B8A',
    images: [
      '/assets/podImages/CPnavy1.png',
      '/assets/podImages/CPnavy2.png',
    ],
    name: 'SnugMarine',
    description: 'A deep, stormy blue that evokes crashing waves and calm strength. Bold yet grounding — perfect for making a statement that still feels serene.',
    variantId: '50652104786240',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  Moss: {
    hex: '#344334',
    images: [
      '/assets/podImages/CPmoss1.png',
      '/assets/podImages/CPmoss2.png',
    ],
    name: 'Mossmelt',
    description: 'A deep moss green inspired by forest trails and quiet hideouts. Earthy and elegant, Mossmelt brings the outdoors in — perfect for grounded play and peaceful lounging.',
    variantId: '50652104753472',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  PastelBlue: {
    hex: '#C7DDE0',
    images: [
      '/assets/podImages/CPpastelblue1.png',
      '/assets/podImages/CPpastelblue2.png',
    ],
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space',
    variantId: '50652104589632',
    fabric: 'Double-brushed Microsuede',
    stock: 10,
  },
  Red: {
    hex: '#ED4C3A',
    images: [
      '/assets/podImages/CPred1.png',
      '/assets/podImages/CPred2.png',
    ],
    name: 'Cherrywhirl',
    description: 'A bold cherry red bursting with playful energy. Cherrywhirl makes any space feel alive — perfect for sparking joy, igniting imagination, and turning everyday lounging into a statement moment.',
    variantId: '50652152037696',
    fabric: 'Double-brushed Microsuede',
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
