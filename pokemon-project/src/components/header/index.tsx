import { FC, useState } from "react";

interface SearchProps {
  setSearchQuery: (query: string) => void; 
}

const Header: FC<SearchProps> = ({ setSearchQuery }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [query, setQuery] = useState(""); 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value); 
  };

  return (
    <header className="border-b-2 border-[#3D4466] w-full flex items-center justify-between pr-10 pl-7 pt-4 pb-4">
      <div className="w-24 h-9">
        <img src="/image 29.png" alt="Logo" />
      </div>

      <div className="flex items-center">
        {isSearchActive ? (
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-neutral-100 rounded-md transition-all p-2"
            value={query} 
            onChange={handleSearchChange} 
            onBlur={() => setIsSearchActive(false)}
          />
        ) : (
          <img
            src="/Vector.png"
            alt="Search"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsSearchActive(true)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
