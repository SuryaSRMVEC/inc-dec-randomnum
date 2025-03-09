// src/components/RandomNumberGenerator.jsx
import React, { useState } from 'react';

export default function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);

  return (
    <div className="random-number">
      <h2>Random Number: {randomNumber ?? '-'}</h2>
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate Random Number
      </button>
    </div>
  );
}
