"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import myGif from "../images/smolganyu.gif"; // Adjust the path as necessary
import "./Input.css";
import Form from "./Form";

export default function Project1() {
  const [base1, setBase1] = useState<number | null>(null);
  const [exp1, setExp1] = useState<number | null>(null);
  const [mod1, setMod1] = useState<number | null>(null);
  const [result1, setResult1] = useState<number | null>(null);

  const [base2, setBase2] = useState<number | null>(null);
  const [exp2, setExp2] = useState<number | null>(null);
  const [mod2, setMod2] = useState<number | null>(null);
  const [result2, setResult2] = useState<number | null>(null);

  // States for Form3
  const [base3, setBase3] = useState<number | null>(null);
  const [exp3, setExp3] = useState<number | null>(null);
  const [mod3, setMod3] = useState<number | null>(null);
  const [result3, setResult3] = useState<number | null>(null);

  // States for Form4
  const [base4, setBase4] = useState<number | null>(null);
  const [exp4, setExp4] = useState<number | null>(null);
  const [mod4, setMod4] = useState<number | null>(null);
  const [result4, setResult4] = useState<number | null>(null);

  const calculateResult1 = () => {
    if (base1 === null || exp1 === null || mod1 === null) return;
    const computedResult = Math.pow(base1, exp1) % mod1;
    setResult1(computedResult);
    setExp2(exp1); // Sync exp of Form 2 with Form 1

    setBase4(computedResult);
  };
  const calculateResult2 = () => {
    if (base2 === null || exp2 === null || mod2 === null || mod2 === 0) return;
    const computedResult = Math.pow(base2, exp2) % mod2;
    setResult2(computedResult);
  };

  const calculateResult3 = () => {
    if (!base3 || !exp3 || !mod3) return;
    const computedResult = Math.pow(base3, exp3) % mod3;
    setResult3(computedResult);
    setExp4(exp3);
  };
  const calculateResult4 = () => {
    if (!base4 || !exp4 || !mod4) return;
    const computedResult = Math.pow(base4, exp4) % mod4;
    setResult4(computedResult);
    // Again, set the base of another form here if needed
    // Example: setBase1(computedResult); // if you want to link back to form 1
  };
  return (
    <div>
      <Image src={myGif} alt="Description of GIF" />
      <Form
        base={base1}
        exp={exp1}
        mod={mod1}
        result={result1}
        onBaseChange={setBase1}
        onExpChange={setExp1}
        onModChange={setMod1}
        onCalculate={calculateResult1}
        inputColors={["input-blue", "input-blue", "input-blue", "input-blue"]}
      />
      <Form
        base={base2}
        exp={exp2}
        mod={mod2}
        result={result2}
        onBaseChange={setBase2}
        onExpChange={setExp2}
        onModChange={setMod2}
        onCalculate={calculateResult2}
        inputColors={["input-orange", "input-blue", "input-blue", "input-blue"]}
      />
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
  );
}
