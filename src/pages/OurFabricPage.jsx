import React from 'react';
import '../styles/OurFabricPage.css';

const OurFabricPage = () => {
  return (
    <div className="fabric-page">
      
      {/* 🪄 Hero Section */}
      <section className="fabric-hero">
        <h1>Why Our Fabric Feels Like Magic</h1>
        <p className="hero-subtext">
          From snuggly naps to monkey swings — our custom-milled microsuede is soft, safe,
          ultra-durable, and made for a life of fun moments (and occasional juice spills).
        </p>
        <img
          src="/assets/classicImages/CCnavy1.png"
          alt="Our Fabric Sample"
          className="fabric-hero-image"
        />
      </section>

      {/* 📄 Overview */}
      <section className="fabric-intro">
        <p>
          Our custom-milled microsuede is everything we dreamed of — soft like the Cushki hug,
          strong for fort building and tumble time, and machine washable to fit real-life messes.
          It’s cozy for kids, comfortable for grown-ups, and pet-ready too.
        </p>
        <p>
          We could talk all day about how much we love this fabric — because when you find
          something that’s beautiful, durable, and made for real play, it deserves to be celebrated.
          With Cushki, you don’t have to choose between form and function — you get both, in every piece.
        </p>
      </section>

      {/* 🎯 Feature Detail */}
      <section className="fabric-feature">
        <h2>Double-Brushed Microsuede</h2>
        <img
          src="/assets/fabricImages/fabric.png"
          alt="Microsuede Details"
          className="fabric-feature-image"
        />
        <p>
          Our double-brushed microsuede isn’t just soft — it’s a feel-good experience.
          This premium material is brushed twice during production to give it a slightly raised texture
          (without being fuzzy), plus that slight shimmering softness that feels like magic.
        </p>
        <p>
          It’s soft, it’s rich, and it has the right amount of sheen when the light catches it.
          But it’s not just about looks — the tiny grooves from brushing also help hide
          pet hair, crumbs, and dust. Perfect for families who love playtime just as much
          as cozy time.
        </p>
        <p>
          Whether you’re building forts, bonding with your little ones, or simply relaxing,
          our double-brushed microsuede makes every moment softer — inside and out.
        </p>
      </section>

    </div>
  );
};

export default OurFabricPage;
