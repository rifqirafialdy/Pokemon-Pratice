import { FC } from "react";

interface CardProps {
  name: string;
  id: number;
  type: string;
  image: string;
}

const Card: FC<CardProps> = ({ name, id, type, image }) => {
  return (
    <div className="flex flex-col bg-[#F0F3FF] w-full h-auto mt-4 justify-center p-3 rounded-3xl shadow-2xl gap-0.5">
      <div className="flex justify-between text-sm">
        <p>{type}</p>
        <p>#{id}</p>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <p className="text-lg font-bold text-center">{name}</p>
    </div>
  );
};

export default Card;
