export async function fetchCardPrice(cardId: string) {
  const res = await fetch(
    `https://api.tcgdex.net/v2/en/cards/${cardId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch price");
  }

  return res.json();
}