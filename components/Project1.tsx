"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import myGif from "../images/smolganyu.gif"; // Adjust the path as necessary
import "./Input.css";

export default function Project1() {
  const [base, setBase] = useState<number | null>(null);
  const [exponent, setExponent] = useState<number | null>(null);
  const [modulus, setModulus] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleBaseChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) setBase(value);
    else setBase(null);
  };

  const handleExponentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) setExponent(value);
    else setExponent(null);
  };

  const handleModulusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) setModulus(value);
    else setModulus(null);
  };

  const calculateResult = () => {
    if (!base || !exponent || !modulus) return; // Ensure all values are provided

    const computedResult = Math.pow(base, exponent) % modulus;
    setResult(computedResult);
  };

  return (
    <div>
      <Image src={myGif} alt="Description of GIF" />
      <div className="calculator">
        <input
          type="text"
          className="formbox-1"
          value={base || ""}
          onChange={handleBaseChange}
        />
        <span className="operator-1">^</span>
        <input
          type="text"
          className="formbox-2"
          value={exponent || ""}
          onChange={handleExponentChange}
        />
        <span className="operator-2">%</span>
        <input
          type="text"
          className="formbox-3"
          value={modulus || ""}
          onChange={handleModulusChange}
        />
        <button className="equals-button" onClick={calculateResult}>
          =
        </button>
        <input
          type="text"
          className="formbox"
          style={{ width: "70px" }} // Inline style for one-off changes
          readOnly
          value={result !== null ? result.toString() : ""} // Convert result to string to display
          placeholder="Result"
        />
      </div>
    </div>
  );
}
