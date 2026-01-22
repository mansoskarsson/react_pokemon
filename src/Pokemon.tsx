
import PokemonPhoto from "./PokemonPhoto";
import { useEffect, useState } from "react";
import { fetchCardPrice } from './api/getPrice';

interface PokemonProps {
  id: string;
  name: string;
  price: number;
  stock: number;
  supertype: string;
  types?: string[];
  images: { small: string; large: string; };
}

export default function Pokemon({ id, name, price, stock, images, supertype, types, }: PokemonProps) {

  const [marketPrice, setMarketPrice] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const stockStatus = stock > 0 ? `In stock (${stock} left)` : "Out of stock";

  useEffect(() => {
    fetchCardPrice(id)
      .then((data) => {
        const cardmarket = data.pricing?.cardmarket;
        const tcgplayer = data.pricing?.tcgplayer;


        const price =
          tcgplayer?.normal?.marketPrice ??
          cardmarket?.trend ??
          null;

        setMarketPrice(price);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  const displayPrice = marketPrice ?? price;

  return (
    <section>
      <h2>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2>
      <p>Type of card: {supertype}</p>
      <p>Type of Pokémon: {types}</p>
      <p>Price on TcgPlayer and if not found, on CardMarket (raw): {marketPrice !== null ? `$${displayPrice}` : `${displayPrice} (fallback)`}</p>
      {error && <small>Market price unavaliable</small>}
      <p>Status: {stockStatus}</p>
      <PokemonPhoto imageUrl={images.small} name={name} />
    </section>
  );
}
