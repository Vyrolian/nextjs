// pages/api/download.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.resolve("./public", "message.txt");
  fs.accessSync(filePath, fs.constants.R_OK); // Check read access to the file
  const fileBuffer = fs.readFileSync(filePath);

  console.log(`File found at ${filePath}, starting download.`);
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Disposition", `attachment; filename=message.txt`);
  res.send(fileBuffer);
}
