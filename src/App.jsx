import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BadgesSection from './components/BadgesSection';
import ComparisonSection from './components/ComparisonSection';
import StorySection from './components/StorySection';
import ReasonsSection from './components/ReasonsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

import ProductPage from './pages/ProductPage'; // 👈 Add your ProductPage here

import './styles/global.css';

function HomePage() {
  return (
    <>
      <Hero />
      <BadgesSection />
      <ComparisonSection />
      <StorySection />
      <ReasonsSection />
      <ReviewsSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-classic" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
