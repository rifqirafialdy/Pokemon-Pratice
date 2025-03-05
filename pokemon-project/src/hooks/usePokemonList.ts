import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonList = (limit: number, sortOption: string, searchQuery: string,offset:number) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        let sortedList = [...data.results];

        if (sortOption === "Sort by Name") {
          sortedList.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "Sort by ID") {
          sortedList.sort((a, b) => {
            const idA = parseInt(a.url.split("/")[6], 10);
            const idB = parseInt(b.url.split("/")[6], 10);
            return idA - idB;
          });
        }

        setPokemonList(sortedList);
      } catch (err) {
        setError("Failed to fetch Pokémon list");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [limit, sortOption,offset]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredPokemonList(
        pokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredPokemonList(pokemonList);
    }
  }, [searchQuery, pokemonList]);

  return { pokemonList: filteredPokemonList, loading, error };
};

export default usePokemonList;
