import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="border-b-2 border-[#3D4466] w-full flex items-center justify-between pr-10 pl-7 pt-4 pb-4">
      <div className=" w-24 h-9">
        <img src="image 29.png" alt="Logo" />
      </div>

      <div className="w-5 h-5 flex items-center ">
        <img src="Vector.png" alt="Search" />
      </div>
    </header>
  );
};

export default Header;
