// PasswordGate.jsx
import React, { useState } from 'react';
import '../styles/PasswordGate.css'; // (optional) if you want styling

const PasswordGate = ({ unlockSite }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (input === 'yourpassword123') {
        unlockSite();
        window.location.href = '/'; // ✅ use this direct browser redirect
    } else {
        setError('Incorrect password. Try again!');
    }
    };

  return (
    <div className="password-gate">
      <h1>Welcome to Cushki!</h1>
      <p>Enter password to access the site.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Enter</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PasswordGate;
