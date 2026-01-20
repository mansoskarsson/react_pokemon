import './App.css';
import Pokemon from './Pokemon';
import pokemonData from "./data/data1.json";
import { useState } from "react";



export interface PokemonData {
  id: string;
  name: string;
  stock: number;
  price: number;
  supertype: string;
  types?: string[];
  images: {
    small: string; large: string;
  };
}

export default function App() {
  const pokemons = pokemonData as PokemonData[];
  const [supertypeFilter, setSupertypeFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredPokemons = pokemons.filter(
    (pokemon) => {
      const matchesSupertype =
        supertypeFilter === "All" || pokemon.supertype === supertypeFilter;

      const matchesType =
        typeFilter === "All" || pokemon.types?.includes(typeFilter);

      return matchesSupertype && matchesType;
    });

  return (
    <main>
      <h1>Pokemon Cards</h1>
      <div>
        <label>
          Type of card:
          <select onChange={(e) => setSupertypeFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Pokémon">Pokémon</option>
            <option value="Trainer">Trainer</option>
            <option value="Energy">Energy</option>
          </select>
        </label>

        <label>
          Type of Pokémon:
          <select onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Bug">Bug</option>
            <option value="Dark">Dark</option>
            <option value="Dragon">Dragon</option>
            <option value="Electric">Electric</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Ghost">Ghost</option>
            <option value="Grass">Grass</option>
            <option value="Ground">Ground</option>
            <option value="Ice">Ice</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Water">Water</option>
          </select>
        </label>
      </div>

      {filteredPokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          price={pokemon.price}
          stock={pokemon.stock}
          images={pokemon.images}
          supertype={pokemon.supertype}
          types={pokemon.types}
        />
      ))}
    </main>
  );
}


