import React from 'react';
import { Link } from 'react-router-dom';
import useImageSlideshow from '../hooks/useImageSlideshow';
import '../styles/Hero.css';

const Hero = () => {
  const images = [
    '/assets/heroSlideshow/1.png',
    '/assets/heroSlideshow/2.png',
    '/assets/heroSlideshow/3.png',
    '/assets/heroSlideshow/4.png',
    '/assets/heroSlideshow/5.png',
    '/assets/heroSlideshow/6.png',
    '/assets/heroSlideshow/7.png',
    '/assets/heroSlideshow/8.png',
    '/assets/heroSlideshow/9.png',
    '/assets/heroSlideshow/10.png',
    '/assets/heroSlideshow/11.png',
    '/assets/heroSlideshow/12.png',
    '/assets/heroSlideshow/13.png',
    '/assets/heroSlideshow/14.png',
    '/assets/heroSlideshow/15.png',
    '/assets/heroSlideshow/16.png',
  ];

  const currentImage = useImageSlideshow(images, 500);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Built to Adapt.<br />
            Styled to Stay.
          </h1>
          <p>
            Rearrange, relax, and reinvent your space — no instructions needed. From lounging to living, every piece moves with you.
          </p>
          <div className="hero-buttons">
            <Link to="/shop-classic" className="btn btn-primary">Shop Classic</Link>
            <Link to="/pod" className="btn btn-secondary">Shop Pod™</Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={currentImage} alt="Cushki Sofa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
