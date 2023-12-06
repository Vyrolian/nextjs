"use client";
import React, { useState } from "react";

interface Props {
  onLoginSuccess: (username: string) => void;
}

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      onLoginSuccess(username);
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };
  console.log("Andy; 651");
  return (
    <form onSubmit={handleLogin}>
      <div>
        <p>check devtools</p>
        <label>User Name: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
