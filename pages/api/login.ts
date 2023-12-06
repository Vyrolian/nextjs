// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  // Here you would check against a database or other data source
  if (username === "Andy" && password === "651") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
