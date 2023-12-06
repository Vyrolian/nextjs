"use client";
import React, { useState } from "react";
import Login from "./Login";
import Protected from "./Protected";

const Project10: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const handleLoginSuccess = (username: string) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Protected username={username} />
      )}
    </div>
  );
};

export default Project10;
