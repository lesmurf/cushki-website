import React from 'react';
import '../styles/ReasonsSection.css';

const reasons = [
  {
    title: "For Parents",
    text: "Build cozy forts, obstacle courses, and special moments that grow with your child.",
    image: "/assets/heroSlideshow/7.png",
  },
  {
    title: "For Couples",
    text: "Lounge, cuddle, and relax with modular pieces that move with your life.",
    image: "/assets/couples.jpg",
  },
  {
    title: "For Preschools",
    text: "Creative setups that foster collaboration, motor skills, and joy.",
    image: "/assets/preschool.jpg",
  },
  {
    title: "For Kindergartens",
    text: "Soft, safe pieces that inspire active learning and social interaction.",
    image: "/assets/kindergarten.jpg",
  },
  {
    title: "For Paw-rents",
    text: "A cozy playground for little paws — roll, climb, or nap in style.",
    image: "/assets/pawrent.jpg",
  },
  {
    title: "For Small Spaces",
    text: "Transform tight corners into dynamic zones, easily packed away.",
    image: "/assets/smallspace.jpg",
  },
  {
    title: "For Big Families",
    text: "Enough pieces for group bonding, builds, and teamwork.",
    image: "/assets/bigfamily.jpg",
  },
  {
    title: "For Gifting",
    text: "A gift that’s thoughtful, functional, and fun.",
    image: "/assets/gifting.jpg",
  },
];

const ReasonsSection = () => {
  return (
    <section className="reasons-section">
      <div className="reasons-heading">
        <h2>Comfort for Every Stage of Life</h2>
        <p>From playtime to downtime — always the right fit.</p>
      </div>

      <div className="reasons-grid">
        {reasons.map(({ title, text, image }) => (
          <div
            key={title}
            className="reason-card"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="reason-content">
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="reason-hover-hint">Hover to discover!</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
