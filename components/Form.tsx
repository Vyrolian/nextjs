import React, { ChangeEvent } from "react";

type FormProps = {
  base: number | null;
  exp: number | null;
  mod: number | null;
  result: number | null;
  onBaseChange: (value: number | null) => void;
  onExpChange: (value: number | null) => void;
  onModChange: (value: number | null) => void;
  onCalculate: () => void;
  inputColors: string[];
};

export default function Form({
  base,
  exp,
  mod,
  result,
  onBaseChange,
  onExpChange,
  onModChange,
  onCalculate,
  inputColors,
}: FormProps) {
  const handleBaseChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Input Value:", value); // Logging the raw input value

    if (value === "") {
      onBaseChange(null); // Set to null when input is empty
      console.log("Setting state to null due to empty input"); // Log status
    } else {
      const numValue = parseInt(value, 10);
      console.log("Parsed Number Value:", numValue); // Logging parsed number value

      if (!isNaN(numValue)) {
        onBaseChange(numValue);
        console.log("Setting state to:", numValue); // Log the value being set to state
      }
    }
  };

  const handleExpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) onExpChange(value);
    else onExpChange(null);
  };

  const handleModChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) onModChange(value);
    else onModChange(null);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className={`formbox-1 ${inputColors[0]}`}
        value={base !== null ? base : ""}
        onChange={handleBaseChange}
        placeholder="Base"
      />
      <span className="operator-1">^</span>
      <input
        type="text"
        className={`formbox-2 ${inputColors[1]}`}
        value={exp || ""}
        onChange={handleExpChange}
        placeholder="Exp"
      />
      <span className="operator-2">%</span>
      <input
        type="text"
        className={`formbox-3 ${inputColors[2]}`}
        value={mod || ""}
        onChange={handleModChange}
        placeholder="Mod"
      />
      <button className="equals-button" onClick={onCalculate}>
        =
      </button>
      <input
        type="text"
        className={`formbox ${inputColors[3]}`}
        style={{ width: "70px" }}
        readOnly
        value={result !== null ? result.toString() : ""}
        placeholder="Result"
      />
    </div>
  );
}
