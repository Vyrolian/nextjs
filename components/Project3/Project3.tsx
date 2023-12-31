"use client";
import React, { useState, useEffect } from "react";

const Project3 = () => {
  const [counter, setCounter] = useState(0);
  const urls = [
    "https://nextjs.org",
    "https://vercel.com/",
    "https://nodejs.org/en",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      window.open(urls[counter], "PromoteFirefoxWindow");
      setCounter((prevCounter) => (prevCounter + 1) % urls.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [counter, urls]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
    </div>
  );
};

export default Project3;
