import React from 'react';
import '../styles/OurFabricPage.css';

const OurFabricPage = () => {
  return (
    <div className="fabric-page">
      {/* Hero Section */}
      <section className="fabric-hero-section">
        <h1>Why Our Fabric Feels Like Magic</h1>
        <p className="subtext">
          From snuggly naps to monkey swings — our custom-milled microsuede is soft, safe,
          ultra-durable, and made for a life of fun moments (and occasional juice spills).
        </p>
        <img src="/assets/colorToImageProduct/blue1.png" alt="Our Fabrics" className="fabric-hero-image" />
      </section>

      {/* Fabric Description */}
      <section className="fabric-description">
        <p>
          Our custom-milled microsuede is everything we dreamed of — soft like the Cushki hug,
          strong for fort building and tumble time, and machine washable to fit real-life messes.
          It’s cozy for kids, comfortable for grown-ups, and pet-ready too.
        </p>
        <p>
          We could talk all day about how much we love this fabric — because when you find
          something that’s beautiful, durable, and made for real play, it deserves to be celebrated.
          With Cushki, you don’t have to choose between form and function — you get both,
          in every piece.
        </p>
      </section>

      {/* Fabric Feature */}
      <section className="fabric-section">
        <h2>Double-Brushed Microsuede</h2>
        <img src="/assets/fabricDetails.png" alt="Microsuede Details" />
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
