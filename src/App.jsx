import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BadgesSection from './components/BadgesSection';
import ComparisonSection from './components/ComparisonSection'; // 👈 New
import StorySection from './components/StorySection'; // 👈 import it
import ReasonsSection from './components/ReasonsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer'; // ✅ <-- ADD Footer here


import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BadgesSection />
      <ComparisonSection /> 
      <StorySection /> {/* 👈 Add it here */}
      <ReasonsSection /> {/* 👈 Add this */}
      <ReviewsSection />
      <Footer /> {/* ✅ Footer appears at the bottom */}
    </>
  );
}

export default App;
