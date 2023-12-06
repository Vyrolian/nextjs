"use client";
import React, { useState } from "react";

interface AlcoholAmounts {
  cognac: number;
  portWine: number;
  dryWine: number;
  beer: number;
}

const Project6: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [amounts, setAmounts] = useState<AlcoholAmounts | null>(null);

  const calculateAlcohol = (userWeight: number): AlcoholAmounts => {
    // Coefficients would need to be adjusted to your specific calculation rules
    const COGNAC_COEFFICIENT = 2.36;
    const PORT_WINE_COEFFICIENT = 4.98;
    const DRY_WINE_COEFFICIENT = 7.88;
    const BEER_COEFFICIENT = 15.75;

    return {
      cognac: parseFloat((userWeight * COGNAC_COEFFICIENT).toFixed(2)),
      portWine: parseFloat((userWeight * PORT_WINE_COEFFICIENT).toFixed(2)),
      dryWine: parseFloat((userWeight * DRY_WINE_COEFFICIENT).toFixed(2)),
      beer: parseFloat((userWeight * BEER_COEFFICIENT).toFixed(2)),
    };
  };

  const handleCalculation = () => {
    if (weight > 0) {
      setAmounts(calculateAlcohol(weight));
    }
  };

  const handleAmountChange = (type: keyof AlcoholAmounts, value: string) => {
    if (amounts) {
      setAmounts({ ...amounts, [type]: parseFloat(value) });
    }
  };

  return (
    <div>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
        placeholder="Enter your weight in kg"
      />
      <button onClick={handleCalculation}>Calculate</button>

      <div>
        <label>
          Cognac:
          <input
            type="number"
            value={amounts ? amounts.cognac : ""}
            onChange={(e) => handleAmountChange("cognac", e.target.value)}
          />{" "}
          gr.
        </label>
        <br />
        <label>
          Port wine:
          <input
            type="number"
            value={amounts ? amounts.portWine : ""}
            onChange={(e) => handleAmountChange("portWine", e.target.value)}
          />{" "}
          gr.
        </label>
        <br />
        <label>
          Dry wine:
          <input
            type="number"
            value={amounts ? amounts.dryWine : ""}
            onChange={(e) => handleAmountChange("dryWine", e.target.value)}
          />{" "}
          gr.
        </label>
        <br />
        <label>
          Beer:
          <input
            type="number"
            value={amounts ? amounts.beer : ""}
            onChange={(e) => handleAmountChange("beer", e.target.value)}
          />{" "}
          gr.
        </label>
      </div>
    </div>
  );
};

export default Project6;
