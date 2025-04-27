import React from 'react';
import '../styles/MiniCart.css';

const MiniCart = ({ cartItems, onRemove, onCheckout, onClose, onUpdateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mini-cart-overlay">
      <div className="mini-cart">
        
        {/* ✅ Proper Header */}
        <div className="mini-cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="close-cart" onClick={onClose}>✕</button>
        </div>

        {/* ✅ Scrollable content */}
        <div className="mini-cart-content">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price} × {item.quantity}</p>

                <div className="quantity-controls">
                  <button onClick={() => onUpdateQuantity(index, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(index, item.quantity + 1)}>+</button>
                </div>
              </div>

              <button className="remove-btn" onClick={() => onRemove(index)}>✕</button>
            </div>
          ))}
        </div>

        {/* ✅ Sticky Footer */}
        <div className="mini-cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button className="checkout-btn" onClick={onCheckout}>
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default MiniCart;

