"use client";
import React, { useEffect, useState } from "react";
import CurrencyRate from "./CurrencyRate";
import Image from "next/image";
import yae from "../../images/yae2sticker.webp";
interface RateData {
  [key: number]: number | undefined;
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
      value: "currency_rate_date_letter_iso",
      label: "курс валюты на дату по буквенному коду валюты (ISO 4217)",
    },
    { value: "currency_rate_today", label: "курс валюты на сегодня" },
    {
      value: "currency_rate_today_iso_num",
      label: "курс валюты на сегодня по цифровому коду валюты (ISO 4217)",
    },
    {
      value: "currency_rate_today_iso_letter",
      label: "курс валюты на сегодня по буквенному коду валюты (ISO 4217)",
    },
    { value: "currency_rate_period", label: "курс валюты за период" },
    {
      value: "daily_rates_date",
      label: "все курсы, устанавливаемые ежедневно на дату",
    },
    {
      value: "daily_rates_today",
      label: "все курсы, устанавливаемые ежедневно на сегодня",
    },
    { value: "monthly_rates", label: "все курсы, устанавливаемые ежемесячно" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const baseUrl = "https://www.nbrb.by/API/ExRates";
    let url;

    switch (selectedOption) {
      case "currencies":
        url = `${baseUrl}/Currencies`;
        break;
      case "currency_desc":
        // Assuming currency ID is required for the description
        url = `${baseUrl}/Currencies/451`; // Replace {currencyId} with the actual currency ID
        break;

      case "daily_rates_today":
        url = `${baseUrl}/Rates?onDate=${
          new Date().toISOString().split("T")[0]
        }&Periodicity=0`; // Rates for today
        break;
      case "monthly_rates":
        url = `${baseUrl}/Rates?Periodicity=1`; // Monthly rates
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
      <button onClick={fetchData}>получить</button>
      <div>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre> // Display data in a formatted way
        ) : (
          <p>No data to display</p>
        )}
      </div>
    </div>
  );
};

export default Project5;
