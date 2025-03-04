import { FC, useState } from "react";
import Header from "../../components/header";
import SortDropdown from "../../components/sort";
import PokemonCard from "../../components/card";
import GridOption from "../../components/grid";

const Home: FC = () => {
  const [sortOption, setSortOption] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} /> 
      <div className="p-4 flex justify-between align-middle">
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        <GridOption isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
      <PokemonCard isGrid={isGrid} sortOption={sortOption} searchQuery={searchQuery} />  
    </div>
  );
};

export default Home;
