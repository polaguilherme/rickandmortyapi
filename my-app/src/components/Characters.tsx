import { Character } from "@/types/types";
import { FaCircle } from "react-icons/fa";

interface CharacterCardProps {
  character: Character;
}

export default function Characters({ character }: CharacterCardProps) {
  const statusColorFilter = (status: string) => {
    if (status === "Alive") {
      return "text-green-500";
    } else if (status === "Dead") {
      return "text-red-500";
    } else if (status === "unknown") {
      return "text-gray-500";
    }
  };

  return (
    <div className="my-4 cursor-pointer">
      <div className="bg-slate-900 shadow-lg rounded-lg overflow-hidden flex transition-transform transform hover:scale-110">
        <div className="p-4 flex flex-col">
          <h2 className="text-xl mb-2 text-gray-white font-bold">
            {character.name}
          </h2>
          <h3 className="text-gray-500 font-semibold text-lg mb-2">
            <span
              className={`inline-block ${statusColorFilter(character.status)}`}
            >
              <FaCircle size={10} />
            </span>
            {character.status} - {character.species}
          </h3>
          <p className="text-gray-500 mb-2">
            Tipo:{" "}
            {character.type === "" ? "nenhum tipo definido" : character.type}
          </p>
          <p className="text-gray-500 mb-2">Gênero: {character.gender}</p>
        </div>
        <img
          src={character.image}
          alt={character.name}
          className="w-[200px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
