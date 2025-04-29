// WhyCushkiPage.jsx
import React from 'react';
import '../styles/WhyCushkiPage.css'; 
import ComparisonSection from '../components/ComparisonSection'; // ✅ Import your existing component

const WhyCushkiPage = () => {
  return (
    <div className="why-cushki-page">

      {/* Top Heading Section */}
      <section className="intro-section">
        <h1>What Makes Cushki Special</h1>
        <p>The story behind our 5 badges — and why thousands of families trust us.</p>
      </section>

      {/* Badges Section */}
      <section className="badges-section">
        <div className="badge-grid">
          {/* Badge 1 */}
          <div className="badge-item">
            <img src="/assets/5badges/TrustedbyFamilies.png" alt="Trusted by Families" />
            <h3>Trusted by Families</h3>
            <p>Thousands of families across Singapore and beyond trust Cushki to be part of their homes. Backed by real parents who value comfort, safety, and long-lasting quality.</p>
          </div>

          {/* Badge 2 */}
          <div className="badge-item">
            <img src="/assets/5badges/EasytoClean.png" alt="Easy to Clean" />
            <h3>Easy to Clean</h3>
            <p>Life gets messy — and that’s okay. Cushki covers are machine-washable and built to handle spills, crumbs, and playtime oops-moments.</p>
          </div>

          {/* Badge 3 */}
          <div className="badge-item">
            <img src="/assets/5badges/Safequalitymaterials.png" alt="Safe Materials" />
            <h3>Safe, Quality Materials</h3>
            <p>Made with GREENGUARD Gold and CertiPUR-US® certified materials, Cushki ensures safe, durable play from day one.</p>
          </div>

          {/* Badge 4 */}
          <div className="badge-item">
            <img src="/assets/5badges/KidFriendly.png" alt="Kid-Friendly" />
            <h3>Kid-Friendly</h3>
            <p>Every edge is soft, every cushion designed with kids in mind. Safe, comfy, and perfect for active imaginations.</p>
          </div>

          {/* Badge 5 */}
          <div className="badge-item">
            <img src="/assets/5badges/CreativePlay.png" alt="Creative Play" />
            <h3>Creative Play</h3>
            <p>Forts, obstacle courses, rocket ships — Cushki unlocks endless ways to build, move, and dream bigger.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Cushki Through the Years</h2>
        <p>Built to grow with your family.</p>

        <div className="timeline-grid">
          <div className="timeline-item">
            <h4>0 months and up</h4>
            <p>Daybed, playmat, tummy-time station — Cushki starts soft and safe from day one. *(Always supervise under 3yo.)*</p>
          </div>

          <div className="timeline-item">
            <h4>6 to 12 months</h4>
            <p>Tunnels, mini slopes, and crawling adventures — helping babies build strength and confidence.</p>
          </div>

          <div className="timeline-item">
            <h4>1 to 3 years old</h4>
            <p>Tiny sofas. Storytime corners. Shape-learning easels — Cushki grows alongside your toddler’s world.</p>
          </div>

          <div className="timeline-item">
            <h4>3 to 11 years old</h4>
            <p>Epic forts, obstacle courses, and imagination unleashed. *(We've got build ideas too!)*</p>
          </div>

          <div className="timeline-item">
            <h4>11 years and beyond</h4>
            <p>Gaming lounge, guest bed, nursing chair — Cushki evolves with your family, even after playtime ends.</p>
          </div>
        </div>
      </section>

      {/* Comparison Section (reuse) */}
      <ComparisonSection />

    </div>
  );
};

export default WhyCushkiPage;
