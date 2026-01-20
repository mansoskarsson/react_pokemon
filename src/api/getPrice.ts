/*
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 4000;

const API_KEY = process.env.POKEMON_API_KEY;
const BASE_URL = "https://www.pokemonpricetracker.com/api/v2/cards";

app.get("/getPrice", async (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).json({ error: "Missing card name" });

  try {
    const response = await fetch(`${BASE_URL}?search=${encodeURIComponent(name)}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const data = await response.json();
    const price = data.data?.[0]?.price ?? null;
    res.json({ price });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/