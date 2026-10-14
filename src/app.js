/**
 * Express app with one route that converts hex colors to RGB.
 * The app is exported without calling listen(), so the integration
 * tests can use it without starting a real server.
 */
import express from "express";
import { hexToRgb } from "./hexToRgb.js";

const app = express();

/**
 * GET /api/hex-to-rgb?hex=ff8800
 * 200: { "hex": "#ff8800", "rgb": { "r": 255, "g": 136, "b": 0 } }
 * 400: { "error": "..." } when hex is missing or invalid.
 */
app.get("/api/hex-to-rgb", (req, res) => {
  const { hex } = req.query;

  if (hex === undefined) {
    return res.status(400).json({ error: "Query parameter 'hex' is required" });
  }

  try {
    const rgb = hexToRgb(hex);
    const normalized = "#" + hex.replace("#", "").toLowerCase();
    res.json({ hex: normalized, rgb });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default app;
