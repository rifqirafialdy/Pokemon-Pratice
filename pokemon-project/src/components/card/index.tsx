import { FC } from "react";
import Card from "./card";
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetails from "../../hooks/usePokemonDetails";

interface PokemonCardProps {
  isGrid: boolean;
  sortOption:string;
}

const PokemonCard: FC<PokemonCardProps> = ({ isGrid,sortOption }) => {
  const { pokemonList, loading, error } = usePokemonList(10,sortOption); // Fetch first 10 Pokémon

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading Pokémon...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className={`grid ${isGrid ? "grid-cols-2 gap-4" : "grid-cols-1"} justify-center items-center px-10`}>
          {pokemonList.map((pokemon) => (
            <PokemonDetails key={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}
    </div>
  );
};

const PokemonDetails: FC<{ url: string }> = ({ url }) => {
  const { pokemon, loading, error } = usePokemonDetails(url);

  if (loading) return <p className="text-center">Loading details...</p>;
  if (error || !pokemon) return <p className="text-center text-red-500">Error loading details</p>;

  return <Card name={pokemon.name} id={pokemon.id} type={pokemon.type} image={pokemon.image} />;
};

export default PokemonCard;
