"use client";
import React from "react";

interface Props {
  username: string;
}

const Protected: React.FC<Props> = ({ username }) => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Hello, {username}!</p>
      <a href="/api/download" download="message.txt">
        Download Message
      </a>
    </div>
  );
};

export default Protected;
