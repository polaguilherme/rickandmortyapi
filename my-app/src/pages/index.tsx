import { useEffect, useState } from "react";
import CharacterCard from "@/components/Characters";
import { fetchCharacters } from "./api/api";
import { Character } from "@/types/types";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchCharacters(currentPage, nameFilter, statusFilter).then((data) =>
      setCharacters(data)
    );
  }, [currentPage, nameFilter, statusFilter]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Filtrar por nome"
            className="p-2 rounded bg-transparent text-white border border-black placeholder:text-black"
            style={{ maxWidth: "200px" }}
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 rounded bg-transparent text-black border border-black"
          >
            <option className="text-black" value="">
              Filtrar por status
            </option>
            <option className="text-black" value="Alive">
              Vivo
            </option>
            <option className="text-black" value="Dead">
              Morto
            </option>
            <option className="text-black" value="unknown">
              Desconhecido
            </option>
          </select>
        </div>
        <div className="mt-4">
          <button className="bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Single character
          </button>
        </div>
      </header>
      <div className="max-w-screen-2xl mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className={`${
              currentPage === 1 ? "hidden" : ""
            } bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded`}
            onClick={prevPage}
          >
            &#8592; Anterior
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={nextPage}
          >
            Próximo &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
