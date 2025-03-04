import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonList = (limit: number) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await res.json();
        setPokemonList(data.results);
      } catch (err) {
        setError("Failed to fetch Pokémon list");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [limit]);

  return { pokemonList, loading, error };
};

export default usePokemonList;
