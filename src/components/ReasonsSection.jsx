import React from 'react';
import '../styles/ReasonsSection.css';

const reasons = [
  { title: "For Parents", text: "Build cozy forts, obstacle courses, and special moments that grow with your child.", image: "/assets/heroSlideshow/7.png" },
  { title: "For Couples", text: "Lounge, cuddle, and relax with modular pieces that move with your life.", image: "/assets/couples.jpg" },
  { title: "For Preschools", text: "Creative play that encourages collaboration, motor skills, and endless imagination.", image: "/assets/preschool.jpg" },
  { title: "For Kindergartens", text: "Soft, safe pieces that inspire active learning, balancing, and social interaction.", image: "/assets/kindergarten.jpg" },
  { title: "For Paw-rents", text: "A comfy playground for little paws — roll, climb, or nap in style.", image: "/assets/pawrent.jpg" },
  { title: "For Small Spaces", text: "Transform tight spaces into dynamic play zones, easily packed away after fun.", image: "/assets/smallspace.jpg" },
  { title: "For Big Families", text: "Enough pieces for group play, teamwork, and giant fort-building missions.", image: "/assets/bigfamily.jpg" },
  { title: "For Gifting", text: "The ultimate gift: a play space, furniture piece, and imagination hub in one.", image: "/assets/gifting.jpg" },
];

const ReasonsSection = () => {
  return (
    <section className="reasons-section">
      <div className="reasons-heading">
        <h2>Endless Reasons to Play with Cushki™</h2>
        <p>Imagination has no age. Cushki™ is for everyone.</p>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="reason-card"
            style={{ "--hover-bg": `url(${reason.image})` }}
          >
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
            <div className="reason-hover-hint">Hover to discover!</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
