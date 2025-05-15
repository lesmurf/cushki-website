import React from 'react';
import '../styles/BuildsPage.css';

const buildImages = [
  { src: '/assets/heroSlideshow/1.png', alt: 'Build Example 1' },
  { src: '/assets/heroSlideshow/2.png', alt: 'Build Example 2' },
  { src: '/assets/heroSlideshow/3.png', alt: 'Build Example 3' },
  { src: '/assets/heroSlideshow/4.png', alt: 'Build Example 4' },
  { src: '/assets/heroSlideshow/5.png', alt: 'Build Example 5' },
  { src: '/assets/heroSlideshow/6.png', alt: 'Build Example 6' },
  { src: '/assets/heroSlideshow/7.png', alt: 'Build Example 7' },
  { src: '/assets/heroSlideshow/8.png', alt: 'Build Example 8' },
  { src: '/assets/heroSlideshow/9.png', alt: 'Build Example 4' },
  { src: '/assets/heroSlideshow/10.png', alt: 'Build Example 5' },
  { src: '/assets/heroSlideshow/11.png', alt: 'Build Example 6' },
  { src: '/assets/heroSlideshow/12.png', alt: 'Build Example 7' },
  { src: '/assets/heroSlideshow/13.png', alt: 'Build Example 8' },
  { src: '/assets/heroSlideshow/14.png', alt: 'Build Example 5' },
  { src: '/assets/heroSlideshow/15.png', alt: 'Build Example 6' },
  { src: '/assets/heroSlideshow/16.png', alt: 'Build Example 7' },
];

const BuildsPage = () => {
  return (
    <section className="builds-page">
      <div className="builds-heading">
        <h1>Limitless Possibilities, One Cushki</h1>
        <p>
          Discover endless ways to build forts, obstacle courses, lounges, castles, and more.
          Your imagination is the only limit.
        </p>
      </div>

      <div className="builds-subtext">
        <p>
          It only takes one Cushki™ and a spark of imagination to transform your space — into an
          indoor playground, a secret hideout, or even a towering fortress.
        </p>
        <p>
          These open-ended creations are what we call builds — and we've got tons of ideas to help
          you get started!
        </p>
        <p>
          Show off your creativity! Tag us <strong>@cushki</strong> or use <strong>#cushkibuilds</strong> on social media.
        </p>
      </div>

      <div className="builds-gallery">
        {buildImages.map(({ src, alt }, index) => (
          <img key={index} src={src} alt={alt} loading="lazy" />
        ))}
      </div>
    </section>
  );
};

export default BuildsPage;
