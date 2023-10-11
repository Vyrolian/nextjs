"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import myGif from "../images/smolganyu.gif"; // Adjust the path as necessary
import "./Input.css";
import Form from "./Form";

export default function Project1() {
  const [base1, setBase1] = useState<number | null>(null);
  const [exp1, setExp1] = useState<number | null>(null);
  const [mod1, setMod1] = useState<number | null>(13);
  const [result1, setResult1] = useState<number | null>(null);

  const [base2, setBase2] = useState<number | null>(null);
  const [exp2, setExp2] = useState<number | null>(null);
  const [mod2, setMod2] = useState<number | null>(13);
  const [result2, setResult2] = useState<number | null>(null);

  const [base3, setBase3] = useState<number | null>(null);
  const [exp3, setExp3] = useState<number | null>(null);
  const [mod3, setMod3] = useState<number | null>(13);
  const [result3, setResult3] = useState<number | null>(null);

  const [base4, setBase4] = useState<number | null>(null);
  const [exp4, setExp4] = useState<number | null>(null);
  const [mod4, setMod4] = useState<number | null>(13);
  const [result4, setResult4] = useState<number | null>(null);

  const calculateResult1 = () => {
    if (mod1 === null || mod1 === 0) return;
    const computedResult = Math.pow(base1 ?? 0, exp1 ?? 0) % mod1;
    setResult1(computedResult);
    setExp2(exp1 ?? 0);
    setBase4(computedResult);
  };
  const calculateResult2 = () => {
    if (mod2 === null || mod2 === 0) return;
    const computedResult = Math.pow(base2 ?? 0, exp2 ?? 0) % mod2;
    setResult2(computedResult);
    setExp4(computedResult);
  };

  const calculateResult3 = () => {
    if (mod3 === null || mod3 === 0) return;
    const computedResult = Math.pow(base3 ?? 0, exp3 ?? 0) % mod3;
    setResult3(computedResult);
    setExp4(exp3 ?? 0);
  };
  const calculateResult4 = () => {
    if (mod4 === null || mod4 === 0) return;
    const computedResult = Math.pow(base4 ?? 0, exp4 ?? 0) % mod4;
    setResult4(computedResult);
  };
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="form-row">
        <div className="form-element">
          <Form
            base={base1}
            exp={exp1}
            mod={mod1}
            result={result1}
            onBaseChange={setBase1}
            onExpChange={setExp1}
            onModChange={setMod1}
            onCalculate={calculateResult1}
            inputColors={[
              "input-blue",
              "input-blue",
              "input-blue",
              "input-blue",
            ]}
          />
        </div>
        <div className="form-element">
          <Form
            base={base3}
            exp={exp3}
            mod={mod3}
            result={result3}
            onBaseChange={setBase3}
            onExpChange={setExp3}
            onModChange={setMod3}
            onCalculate={calculateResult3}
            inputColors={[
              "input-orange",
              "input-orange",
              "input-orange",
              "input-orange",
            ]}
          />
        </div>
      </div>
      <div className="image-container">
        <Image src={myGif} alt="Description of GIF" />
      </div>
      <div className="form-row">
        <div className="form-element">
          <Form
            base={base2}
            exp={exp2}
            mod={mod2}
            result={result2}
            onBaseChange={setBase2}
            onExpChange={setExp2}
            onModChange={setMod2}
            onCalculate={calculateResult2}
            inputColors={[
              "input-orange",
              "input-blue",
              "input-blue",
              "input-blue",
            ]}
          />
        </div>
        <div className="form-element">
          <Form
            base={base4}
            exp={exp4}
            mod={mod4}
            result={result4}
            onBaseChange={setBase4}
            onExpChange={setExp4}
            onModChange={setMod4}
            onCalculate={calculateResult4}
            inputColors={[
              "input-blue",
              "input-orange",
              "input-orange",
              "input-orange",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
