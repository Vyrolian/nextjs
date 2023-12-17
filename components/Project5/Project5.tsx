"use client";
import React, { useEffect, useState } from "react";
import CurrencyRate from "./CurrencyRate";
import Image from "next/image";
import yae from "../../images/yae2sticker.webp";
interface RateData {
  [key: number]: number | undefined;
}
interface CurrencyRateResponse {
  Cur_ID: number;
  Date: string;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate?: number;
}
const Project5: React.FC = () => {
  const options = [
    { value: "currencies", label: "справочник валют" },
    { value: "currency_desc", label: "описание валюты" },
    { value: "currency_rate_date", label: "курс валюты на дату" },
    {
      value: "currency_rate_date_iso",
      label: "курс валюты на дату по цифровому коду валюты (ISO 4217)",
    },
    {
      value: "daily_rates_today",
      label: "все курсы, устанавливаемые ежедневно на сегодня",
    },
    { value: "monthly_rates", label: "все курсы, устанавливаемые ежемесячно" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [data, setData] = useState(null);
  const [currencyId, setCurrencyId] = useState("");
  const [date, setDate] = useState<any>(null);
  const fetchData = async () => {
    const baseUrl = "https://www.nbrb.by/API/ExRates";
    let url;

    switch (selectedOption) {
      case "currencies":
        url = `${baseUrl}/Currencies`;
        break;
      case "currency_desc":
        // Assuming currency ID is required for the description
        url = `${baseUrl}/Currencies/${currencyId}`;
        break;

      case "daily_rates_today":
        url = `${baseUrl}/Rates?onDate=${
          new Date().toISOString().split("T")[0]
        }&Periodicity=0`; // Rates for today
        break;
      case "monthly_rates":
        url = `${baseUrl}/Rates?Periodicity=1`; // Monthly rates
        break;
      case "currency_rate_date":
        url = `${baseUrl}/Rates/${currencyId}?onDate=${date}`;
        break;
      case "currency_rate_date_iso":
        url = `${baseUrl}/Rates/${currencyId}?onDate=${date}&ParamMode=2`;
        break;
      default:
        setData(null);
        return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData(null);
    }
  };

  // Call fetchData when the selected option changes
  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  const renderData = () => {
    if (!data) {
      return <p>No data to display</p>;
    }

    if (selectedOption.includes("currency_rate") && data.Cur_OfficialRate) {
      return (
        <div>
          <p>{`Курс для ${data.Cur_Name}: ${data.Cur_OfficialRate}`}</p>
        </div>
      );
    } else {
      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
  };
  return (
    <div>
      <div className="centered">
        <Image
          src={yae}
          alt="Description of GIF"
          style={{ width: "250px", height: "auto" }}
        />
      </div>
      <div className="centered">
        <CurrencyRate />
      </div>
      <select onChange={handleSelectChange} value={selectedOption}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption === "currency_desc" && (
        <input
          type="text"
          placeholder="Enter Currency ID"
          value={currencyId}
          onChange={(e) => setCurrencyId(e.target.value)}
        />
      )}
      {(selectedOption === "currency_rate_date" ||
        selectedOption === "currency_rate_date_iso") && (
        <>
          <input
            type="text"
            placeholder="Enter Currency ID"
            value={currencyId}
            onChange={(e) => setCurrencyId(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </>
      )}
      <button onClick={fetchData}>получить</button>
      <div>{renderData()}</div>
    </div>
  );
};

export default Project5;
