import { useState, useEffect } from "react";

interface PokemonDetails {
  id: number;
  name: string;
  type: string;
  image: string;
  spriteFront :string;
  health : number;
  attack: number;
  defense: number;
}

const usePokemonDetails = (url: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const details = await res.json();
        setPokemon({
          id: details.id,
          name: details.name,
          type: details.types[0].type.name, 
          image: details.sprites.other["official-artwork"].front_default,
          spriteFront:details.sprites.front_default,
          health:details.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
          attack:details.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
          defense:details.stats.find((stat: any) => stat.stat.name === 'defense').base_stat 
        });
      } catch (err) {
        setError("Failed to fetch Pokémon details");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  return { pokemon, loading, error };
};

export default usePokemonDetails;
