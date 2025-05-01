import React from 'react';
import '../styles/MiniCart.css';

const MiniCart = ({
  cartItems,
  onRemove,
  onCheckout,
  onClose,
  onUpdateQuantity
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'SGD',
  });

  // Bundle detection
  const hasClassic = cartItems.find(item => item.title === 'The Cushki Classic' && item.quantity === 1);
  const hasPod = cartItems.find(item => item.title === 'The Cushki Pod' && item.quantity === 1);
  const isStrictBundle = hasClassic && hasPod && cartItems.length === 2;

  return (
    <div className="mini-cart-overlay" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      <div className="mini-cart">
        
        {/* Header */}
        <div className="mini-cart-header">
          <h2>Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          <button className="close-cart" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {/* Content */}
        <div className="mini-cart-content">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty!</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={item.id || index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>{currency.format(item.price)} × {item.quantity}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >−</button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemove(index)}
                  aria-label={`Remove ${item.title}`}
                >✕</button>
              </div>
            ))
          )}
        </div>

        {/* Sticky Footer */}
        <div className="discount-note">
          {isStrictBundle
            ? '🎉 You unlocked a bundle discount!'
            : 'Got a discount code? Use it at checkout to save!'}
        </div>

        <div className="cart-total">
          <strong>Total:</strong> {currency.format(total)}
        </div>

        {isStrictBundle ? (
          <a
            href="https://shopcushkisg.com/discount/BIGBUNDLE10"
            className="checkout-btn"
          >
            Checkout with 10% Bundle Discount
          </a>
        ) : (
          <button className="checkout-btn" onClick={onCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
