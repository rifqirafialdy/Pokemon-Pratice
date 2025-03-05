import { FC } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const DetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>(); // Get Pokémon ID from URL
  const { pokemon, loading, error } = usePokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (loading) return <p>Loading Pokémon details...</p>;
  if (error || !pokemon) return <p className="text-red-500">Error loading details</p>;

  return (
    <div>
<Header setSearchQuery={() => {}} isSearchNeed={false} />
<div className="p-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-40 h-40 object-contain"
        />
        <img src={pokemon.spriteFront} alt="" className="w-10" />
        <p>Type: {pokemon.type}</p>
        <p>{pokemon.attack}</p>
        <p>{pokemon.health-10}</p>
        <p>ID: #{pokemon.id}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
