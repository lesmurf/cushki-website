import React from 'react';
import '../styles/BuildsPage.css';

const BuildsPage = () => {
  return (
    <section className="builds-page">
      <div className="builds-heading">
        <h1>Limitless Possibilities, One Cushki</h1>
        <p>Discover endless ways to build forts, obstacle courses, lounges, castles, and more. Your imagination is the only limit.</p>
      </div>

      <div className="builds-subtext">
        <p>It only takes one Cushki™ and a spark of imagination to transform your space — into an indoor playground, a secret hideout, or even a towering fortress.</p>
        <p>These open-ended creations are what we call builds — and we've got tons of ideas to help you get started!</p>
        <p>Show off your creativity! Tag us @cushki or #cushkibuilds on social media.</p>
      </div>

      <div className="builds-gallery">
        <img src="/assets/builds/blue.png" alt="Build Example 1" />
        <img src="/assets/builds/pink.png" alt="Build Example 2" />
        <img src="/assets/builds/blue2.png" alt="Build Example 3" />
        <img src="/assets/builds/green.png" alt="Build Example 4" />
        <img src="/assets/builds/teal.png" alt="Build Example 5" />
        <img src="/assets/builds/grey.png" alt="Build Example 6" />
        <img src="/assets/builds/yellow.png" alt="Build Example 7" />
        <img src="/assets/builds/bluepink.png" alt="Build Example 8" />
      </div>
    </section>
  );
};

export default BuildsPage;
