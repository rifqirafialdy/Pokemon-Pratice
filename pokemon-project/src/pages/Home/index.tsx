import { FC, useState } from "react";
import Header from "../../components/header";
import SortDropdown from "../../components/sort";
import PokemonCard from "../../components/card";
import GridOption from "../../components/grid";

const ITEMS_PER_PAGE = 10; // Define how many Pokémon per page

const Home: FC = () => {
  const [sortOption, setSortOption] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [offset, setOffset] = useState(0);

  const handleNext = () => setOffset(prevOffset => prevOffset + ITEMS_PER_PAGE);
  const handlePrev = () => setOffset(prevOffset => Math.max(prevOffset - ITEMS_PER_PAGE, 0));

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} isSearchNeed={true} /> 
      <div className="p-4 flex justify-between align-middle">
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        <GridOption isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
      
      <PokemonCard isGrid={isGrid} sortOption={sortOption} searchQuery={searchQuery} offset={offset} />  

      <div className="p-4 flex justify-between text-2xl text-neutral-50">
        <button onClick={handlePrev} disabled={offset === 0} className={offset === 0 ? "opacity-50 cursor-not-allowed" : ""}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Home;
