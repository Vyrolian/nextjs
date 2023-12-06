"use client";
import React, { useState, useEffect } from "react";

const Project3 = () => {
  const [counter, setCounter] = useState(0);
  const urls = [
    "https://nextjs.org",
    "https://vercel.com/",
    "https://www.youtube.com/watch?v=kEoumdx4Xbc",
    "https://nodejs.org/en",
    "https://www.youtube.com/watch?v=9q9Pd8N6PfA&pp=ygUSZ2FueXUgYmFuZyBib29zdGVk",
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
