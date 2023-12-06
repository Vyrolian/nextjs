"use client";
import React, { useState } from "react";

const Project7 = () => {
  const [query, setQuery] = useState("");

  const redirectToGoogleUS = () => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}&gl=us`;
  };
  const redirectToGoogleRegular = () => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <div>
        <button style={{ display: "block" }} onClick={redirectToGoogleRegular}>
          Search in your region
        </button>
        <button style={{ display: "block" }} onClick={redirectToGoogleUS}>
          Search in the U.S.
        </button>
      </div>
    </div>
  );
};

export default Project7;
