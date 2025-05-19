import React, { useState } from 'react';
import '../styles/ProductPage.css';
import PodFabricAccordions from '../components/PodFabricAccordions';

const colors = {
  Beige: {
    hex: '#D6C5A8',
    image: '/assets/podCoverImages/CPbeige-cover.png',
    name: 'Oat',
    description: 'A creamy oat beige that brings softness and simplicity to any space. Calm, cozy, and quietly elegant — made to blend in, but never disappear.',
    variantId: '50658841690432',
  },
  DarkGrey: {
    hex: '#4A4A4A',
    image: '/assets/podCoverImages/CPdarkgrey-cover.png',
    name: 'Slatehug',
    description: 'A rich charcoal grey that wraps your space in calm and comfort. Minimal, modern, and quietly strong — built to ground any room with effortless style.',
    variantId: '50658841657664',
  },
  Green: {
    hex: '#6E9B89',
    image: '/assets/podCoverImages/CPgreen-cover.png',
    name: 'Sagemelt',
    description: 'A muted sage green with a hint of grey, Sagemelt brings the quiet calm of nature indoors. Soft, grounding, and endlessly versatile — it’s the color of slow mornings, cozy moments, and intentional play.',
    variantId: '50658841592128',
  },
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/podCoverImages/CPgrey-cover.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50658841723200',
  },
  LightBlue: {
    hex: '#C7DDE0',
    image: '/assets/podCoverImages/CPlightblue-cover.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space.',
    variantId: '50658841755968',
  },
  MossGreen: {
    hex: '#344334',
    image: '/assets/podCoverImages/CPmossgreen-cover.png',
    name: 'Mossmelt',
    description: 'A deep moss green inspired by forest trails and quiet hideouts. Earthy and elegant, Mossmelt brings the outdoors in — perfect for grounded play and peaceful lounging.',
    variantId: '50658841624896',
  },
  Navy: {
    hex: '#4A6B8A',
    image: '/assets/podCoverImages/CPnavy-cover.png',
    name: 'SnugMarine',
    description: 'A deep, stormy blue that evokes crashing waves and calm strength. Bold yet grounding — perfect for making a statement that still feels serene.',
    variantId: '50658841559360',
  },
  Red: {
    hex: '#ED4C3A',
    image: '/assets/podCoverImages/CPred-cover.png',
    name: 'Cherrywhirl',
    description: 'A bold cherry red bursting with playful energy. Cherrywhirl makes any space feel alive — perfect for sparking joy, igniting imagination, and turning everyday lounging into a statement moment.',
    variantId: '50658841526592',
  },
};

const price = 138;

const PodFabricPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Beige');

  const handleAddToCart = () => {
    const variant = colors[selectedColor];
    addToCart({
      title: 'Cushki Pod Fabric Set',
      price,
      quantity: 1,
      image: variant.image,
      variantId: variant.variantId,
    });
  };

  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-gallery">
          <img
            src={colors[selectedColor].image}
            alt={selectedColor}
            className="main-product-image"
          />
        </div>

        <div className="product-info-panel">
          <h1>The Cushki™ Pod Fabric Set</h1>
          <p className="price">${price}</p>

          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          <div className="color-swatches">
            {Object.entries(colors).map(([colorKey, colorData]) => (
              <div
                key={colorKey}
                className={`swatch ${selectedColor === colorKey ? 'active' : ''}`}
                style={{ backgroundColor: colorData.hex }}
                onClick={() => setSelectedColor(colorKey)}
                aria-label={`Select ${colorData.name}`}
              />
            ))}
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - ${price}
          </button>

          <div className="free-shipping">
            Free Shipping & <a href="#" className="returns-link">30-day Returns</a>
          </div>
        </div>
      </div>

      <PodFabricAccordions />
    </div>
  );
};

export default PodFabricPage;
