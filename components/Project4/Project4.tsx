"use client";
import React, { useState } from "react";

const Project4 = () => {
  const [bottomValue, setBottomValue] = useState<string>("");
  const [topValue, setTopValue] = useState<string>("");
  const [primeNumbers, setPrimeNumbers] = useState<number[]>([]);

  const isPrime = (num: number): boolean => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const generatePrimes = () => {
    const bottom = parseInt(bottomValue, 10);
    const top = parseInt(topValue, 10);
    const primes: number[] = [];
    for (let i = bottom; i <= top; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    setPrimeNumbers(primes);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <label>
          Bottom value:
          <input
            type="number"
            value={bottomValue}
            onChange={(e) => setBottomValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Top value:
          <input
            type="number"
            value={topValue}
            onChange={(e) => setTopValue(e.target.value)}
          />
        </label>
      </div>
      <button onClick={generatePrimes}>Generate range of Prime Numbers</button>
      {primeNumbers.length > 0 && (
        <div>
          <h3>Prime Numbers:</h3>
          <ul>
            {primeNumbers.map((prime, index) => (
              <li key={index}>{prime}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Project4;
