import React from 'react';
import '../styles/WhyCushkiPage.css';
import ComparisonSection from '../components/ComparisonSection';

const WhyCushkiPage = () => {
  return (
    <div className="why-cushki-page">
      
      {/* 🧠 Intro Section */}
      <section className="intro-section">
        <h1>What Makes Cushki Special</h1>
        <p>The story behind our 5 badges — and why thousands of families trust us.</p>
      </section>

      {/* 🏅 Badges */}
      <section className="badges-section">
        <div className="badge-grid">
          {[
            {
              img: 'TrustedbyFamilies',
              title: 'Trusted by Families',
              text: 'Thousands of families across Singapore and beyond trust Cushki to be part of their homes. Backed by real parents who value comfort, safety, and long-lasting quality.',
            },
            {
              img: 'EasytoClean',
              title: 'Easy to Clean',
              text: 'Life gets messy — and that’s okay. Cushki covers are machine-washable and built to handle spills, crumbs, and playtime oops-moments.',
            },
            {
              img: 'Safequalitymaterials',
              title: 'Safe, Quality Materials',
              text: 'Made with GREENGUARD Gold and CertiPUR-US® certified materials, Cushki ensures safe, durable play from day one.',
            },
            {
              img: 'KidFriendly',
              title: 'Kid-Friendly',
              text: 'Every edge is soft, every cushion designed with kids in mind. Safe, comfy, and perfect for active imaginations.',
            },
            {
              img: 'CreativePlay',
              title: 'Creative Play',
              text: 'Forts, obstacle courses, rocket ships — Cushki unlocks endless ways to build, move, and dream bigger.',
            },
          ].map((badge, index) => (
            <div className="badge-item" key={index}>
              <img src={`/assets/5badges/${badge.img}.png`} alt={badge.title} />
              <h3>{badge.title}</h3>
              <p>{badge.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⏳ Timeline Section */}
      <section className="timeline-section">
        <h2>Cushki Through the Years</h2>
        <p>Built to grow with your family.</p>

        <div className="timeline-grid">
          {[
            {
              age: '0 months and up',
              text: 'Daybed, playmat, tummy-time station — Cushki starts soft and safe from day one. *(Always supervise under 3yo.)*',
            },
            {
              age: '6 to 12 months',
              text: 'Tunnels, mini slopes, and crawling adventures — helping babies build strength and confidence.',
            },
            {
              age: '1 to 3 years old',
              text: 'Tiny sofas. Storytime corners. Shape-learning easels — Cushki grows alongside your toddler’s world.',
            },
            {
              age: '3 to 11 years old',
              text: 'Epic forts, obstacle courses, and imagination unleashed. *(We\'ve got build ideas too!)*',
            },
            {
              age: '11 years and beyond',
              text: 'Gaming lounge, guest bed, nursing chair — Cushki evolves with your family, even after playtime ends.',
            },
          ].map((entry, index) => (
            <div className="timeline-item" key={index}>
              <h4>{entry.age}</h4>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🧩 Comparison Section */}
      <ComparisonSection />
    </div>
  );
};

export default WhyCushkiPage;
