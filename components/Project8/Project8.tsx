"use client";
import React, { useState, useEffect } from "react";

function DisplayIPs() {
  const [ips, setIps] = useState<any>({ clientIp: "", serverIp: "" });

  useEffect(() => {
    // Fetching the IPs from your API
    fetch("../api/get-ips")
      .then((response) => response.json())
      .then((data) => setIps(data))
      .catch((error) => console.error("Error fetching IPs:", error));
  }, []);

  return (
    <div>
      <h3>Your IP Address: {ips.clientIp}</h3>
      <h3>Server IP Address: {ips.serverIp}</h3>
    </div>
  );
}

export default DisplayIPs;
