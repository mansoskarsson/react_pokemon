
import PokemonPhoto from "./PokemonPhoto";

interface PokemonProps {
  name: string;
  price: number;
  stock: number;
  supertype: string;
  types?: string[];
  images: { small: string; large: string };
}

export default function Pokemon({ name, price, stock, images, supertype, types, }: PokemonProps) {

  const stockStatus = stock > 0 ? `In stock (${stock} left)` : "Out of stock";

  return (
    <section>
      <h2>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2>
      <p>Type of card: {supertype}</p>
      <p>Type of Pokémon: {types}</p>
      <p>The price of this card raw is: {price}$</p>
      <p>Status: {stockStatus}</p>
      <PokemonPhoto imageUrl={images.small} name={name} />
    </section>
  );
}
