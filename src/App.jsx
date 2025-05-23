import React, { useState } from 'react';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MiniCart from './components/MiniCart';
import PasswordGate from './components/PasswordGate';

import Hero from './components/Hero';
import BadgesSection from './components/BadgesSection';
import ComparisonSection from './components/ComparisonSection';
import StorySection from './components/StorySection';
import ReasonsSection from './components/ReasonsSection';
import ReviewsSection from './components/ReviewsSection';

import ProductPage from './pages/ProductPage';
import ClassicFabricPage from './pages/ClassicFabricPage';
import ClassicLinerPage from './pages/ClassicLinerPage';
import PodPage from './pages/PodPage';
import PodFabricPage from './pages/PodFabricPage';
import PodLinerPage from './pages/PodLinerPage';

import WhyCushkiPage from './pages/WhyCushkiPage';
import BuildsPage from './pages/BuildsPage';
import OurFabricPage from './pages/OurFabricPage';

import FAQPage from './pages/FAQPage';

import ContactPage from './pages/ContactPage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import SafetyPage from './pages/SafetyPage';

import WavePrimary from './components/WavePrimary';
import WaveSecondary from './components/WaveSecondary';

import './styles/global.css';

function HomePage() {
  return (
    <>
      <Hero />
      <WavePrimary />
      <ReasonsSection />
      <WaveSecondary />
      <ComparisonSection />
      <WavePrimary />
      <StorySection />
      <WaveSecondary />
      <BadgesSection />
      <WavePrimary />
      <ReviewsSection />
    </>
  );
}

function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('isUnlocked') === 'true';
  });

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const isPasswordProtected = true;

  const unlockSite = () => {
    localStorage.setItem('isUnlocked', 'true');
    setIsUnlocked(true);
  };

  const openMiniCart = () => setShowCart(true);
  const closeMiniCart = () => setShowCart(false);

  const totalCartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    setCartItems(prevItems => {
      const updated = [...prevItems];
      updated.splice(index, 1);
      return updated;
    });
  };

  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems => {
      const updated = [...prevItems];
      updated[index].quantity = newQuantity;
      return updated;
    });
  };

  const hasClassic = cartItems.some(item => item.title === "Cushki Classic");
  const hasPod = cartItems.some(item => item.title === "Cushki Pod");
  const isBigBundle = hasClassic && hasPod;

  const handleCheckout = () => {
    let cartUrl;

    if (isBigBundle) {
      const bigBundleVariantId = '9792193298752';
      cartUrl = `https://shopcushkisg.com/cart/${bigBundleVariantId}:1`;
    } else {
      cartUrl = `https://shopcushkisg.com/cart/${cartItems
        .map(item => `${item.variantId}:${item.quantity}`)
        .join(',')}`;
    }

    console.log("➡️ Redirecting to:", cartUrl);
    window.location.href = cartUrl;
  };

  if (isPasswordProtected && !isUnlocked) {
    return <PasswordGate unlockSite={unlockSite} />;
  }

  return (
    <Router>
      <Navbar cartCount={totalCartQuantity} onCartClick={openMiniCart} />

      <div className="page-content">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop-classic" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/classic-fabric-sets" element={<ClassicFabricPage addToCart={addToCart} />} />
          <Route path="/classic-liner-sets" element={<ClassicLinerPage addToCart={addToCart} />} />
          <Route path="/pod" element={<PodPage addToCart={addToCart} />} />
          <Route path="/pod-fabric-sets" element={<PodFabricPage addToCart={addToCart} />} />
          <Route path="/pod-liner-sets" element={<PodLinerPage addToCart={addToCart} />} />
          <Route path="/see-builds" element={<BuildsPage />} />
          <Route path="/why-cushki" element={<WhyCushkiPage />} />
          <Route path="/our-fabric" element={<OurFabricPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/safety" element={<SafetyPage />} />
        </Routes>
      </div>

      <Footer />

      {showCart && (
        <MiniCart
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateCartQuantity}
          onCheckout={handleCheckout}
          onClose={closeMiniCart}
        />
      )}
    </Router>
  );
}

export default App;
