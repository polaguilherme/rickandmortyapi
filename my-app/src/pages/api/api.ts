import axios from "axios";

export const fetchCharacters = async (
  page: number,
  nameFilter: string = "",
  statusFilter: string = ""
) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`,
      {
        params: {
          page,
          name: nameFilter,
          status: statusFilter,
        },
      }
    );

    if (response.status === 200) {
      return response.data.results;
    } else {
      throw new Error("falha ao pegar os dados");
    }
  } catch (error) {
    console.error("erro ao pegar dados:", error);
    return [];
  }
};
