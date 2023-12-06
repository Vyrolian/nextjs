// pages/api/get-ips.js
import os from "os";

export default function handler(req, res) {
  // Client IP
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Server IP (Fetching the first non-internal IPv4 address)
  const serverIp = Object.values(os.networkInterfaces())
    .flat()
    .find((iface) => !iface.internal && iface.family === "IPv4")?.address;

  // Sending both IPs in the response
  res.status(200).json({ clientIp, serverIp });
}
