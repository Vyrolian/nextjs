"use client";
import React, { useState } from "react";
import "./passwordgenerator.css";
const PasswordGenerator: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*"];

  const generatePassword = () => {
    const N2 = identifier.charCodeAt(1) % 10;
    const N3 = identifier.charCodeAt(2) % 10;
    const P = (N2 + N3 + 1) % 26;
    const smallLetterP = String.fromCharCode(97 + P);

    const b1 = Math.floor(Math.random() * 10);
    const b2 = Math.floor(Math.random() * 10);
    const b3 = Math.floor(Math.random() * 10);
    const b4 = symbols[Math.floor(Math.random() * symbols.length)];
    const b5 = symbols[Math.floor(Math.random() * symbols.length)];
    const b6 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const b7 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const b8 = smallLetterP;

    setPassword(`${b1}${b2}${b3}${b4}${b5}${b6}${b7}${b8}`);
  };

  return (
    <div>
      <input
        type="text"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        placeholder="Введите идентификатор"
      />
      <button onClick={generatePassword}>Сгенерировать пароль</button>
      {password && <p>Сгенерированный пароль: {password}</p>}
    </div>
  );
};

export default PasswordGenerator;
