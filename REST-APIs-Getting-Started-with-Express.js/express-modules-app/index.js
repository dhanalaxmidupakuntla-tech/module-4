import express from "express";
import os from "os";
import dns from "dns";
import { readFileData } from "./read.js";

const app = express();
const PORT = 2705;

/* ---------------- Test Route ---------------- */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* ---------------- Read File Route ---------------- */
app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/* ---------------- System Details Route ---------------- */
app.get("/systemdetails", (req, res) => {
  const cpus = os.cpus();

  res.json({
    platform: os.platform(),
    totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    cpuModel: cpus[0].model,
    cpuCores: cpus.length   // ✅ Bonus
  });
});

/* ---------------- Get IP Route ---------------- */
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: "DNS lookup failed" });
    }

    res.json({
      hostname: "masaischool.com",
      addresses   // ✅ IPv4 + IPv6
    });
  });
});

/* ---------------- Start Server ---------------- */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
