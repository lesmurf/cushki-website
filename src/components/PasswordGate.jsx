import React, { useState } from 'react';
import '../styles/PasswordGate.css';

const PASSWORD = 'yourpassword123';

const PasswordGate = ({ unlockSite }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedInput = input.trim().toLowerCase();

    if (cleanedInput === PASSWORD) {
      unlockSite();
      window.location.href = '/'; // direct redirect
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
          aria-label="Password"
          autoFocus
        />
        <button type="submit">Enter</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PasswordGate;
