import React, { useState } from 'react';
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
import BuildsPage from './pages/BuildsPage'

import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import WarrantyPage from './pages/WarrantyPage';
import CarePage from './pages/CarePage';

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
  // 🛡️ Password Gate and Cart State - ALL HOOKS MUST BE AT TOP
  const [isUnlocked, setIsUnlocked] = useState(() => {
    // ✅ Check localStorage first when app loads
    return localStorage.getItem('isUnlocked') === 'true';
  });

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const isPasswordProtected = true; // ✅ Flip this to false to remove password protection

  const unlockSite = () => {
    localStorage.setItem('isUnlocked', 'true'); // ✅ Save into localStorage
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

  const handleCheckout = () => {
    const cartUrl = `https://m1xmy8-2u.myshopify.com/cart/${cartItems.map(item => `${item.variantId}:${item.quantity}`).join(',')}`;
    window.location.href = cartUrl;
  };

  // ✅ Password Gate check AFTER all hooks
  if (isPasswordProtected && !isUnlocked) {
    return <PasswordGate unlockSite={unlockSite} />;
  }

  // ✅ Normal app rendering
  return (
    <Router>
      <Navbar cartCount={totalCartQuantity} onCartClick={openMiniCart} />

      <div className="page-content">
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

          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/care" element={<CarePage />} />
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