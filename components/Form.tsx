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
    console.log("Input Value:", value);

    if (value === "") {
      onBaseChange(null);
      console.log("Setting state to null due to empty input");
    } else {
      const numValue = parseInt(value, 10);
      console.log("Parsed Number Value:", numValue);

      if (!isNaN(numValue)) {
        onBaseChange(numValue);
        console.log("Setting state to:", numValue);
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
      />
      <span className="operator-1">^</span>
      <input
        type="text"
        className={`formbox-2 ${inputColors[1]}`}
        value={exp !== null ? exp : ""}
        onChange={handleExpChange}
      />
      <span className="operator-2">%</span>
      <input
        type="text"
        className={`formbox-3 ${inputColors[2]}`}
        value={mod || ""}
        onChange={handleModChange}
      />
      <button className="equals-button" onClick={onCalculate}>
        =
      </button>
      <input
        type="text"
        className={`formbox-3 ${inputColors[3]}`}
        readOnly
        value={result !== null ? result.toString() : ""}
      />
    </div>
  );
}
