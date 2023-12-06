"use client";
import React, { useState } from "react";
import "./Project9.css";
const getRandomNumber = () =>
  Math.floor(Math.pow(2, Math.ceil(Math.random() * 10)));

const BinaryLogarithmGame: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(getRandomNumber());
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const checkAnswer = (userInput: string) => {
    const userAnswer = parseInt(userInput, 10);
    if (userAnswer === Math.log2(currentNumber)) {
      setScore(score + 1);
      setCurrentNumber(getRandomNumber());
      setError(false);
    } else {
      setScore(score - 1);
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkAnswer(userAnswer);
    setUserAnswer("");
  };

  return (
    <div className="game-container">
      <h2>React Game: Binary logarithm</h2>
      <form onSubmit={handleSubmit} className={`form ${error ? "error" : ""}`}>
        <label>
          lb({currentNumber})=
          <input
            type="text"
            value={userAnswer}
            onChange={handleChange}
            className={`input ${error ? "error" : ""}`}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>Score: {score}</div>
    </div>
  );
};

export default BinaryLogarithmGame;
