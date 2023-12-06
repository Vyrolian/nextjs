"use client";
import React, { useState } from "react";

interface RateData {
  [key: number]: number | undefined;
}

const CurrencyRate: React.FC = () => {
  const [rateData, setRateData] = useState<RateData>({});

  const fetchRate = async (currencyId: number) => {
    try {
      const response = await fetch(
        `https://www.nbrb.by/API/ExRates/Rates/${currencyId}`
      );
      const data = await response.json();
      setRateData((prevState) => ({
        ...prevState,
        [currencyId]: data.Cur_OfficialRate,
      }));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchRate(431)}>Get $ Rate</button>
      <button onClick={() => fetchRate(451)}>Get € Rate</button>
      <button onClick={() => fetchRate(452)}>Get zl Rate</button>
      <div>USD Rate: {rateData[431]}</div>
      <div>EUR Rate: {rateData[451]}</div>
      <div>PLN Rate: {rateData[452]}</div>
    </div>
  );
};

export default CurrencyRate;
