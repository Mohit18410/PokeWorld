import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);

  async function getPokemonData() {
    try {
      const res = await fetch("http://localhost:3001/data/v1/pokeData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data.data);
      setPokemonData(data.data);
    } catch (error) {
      console.log("Error in getting data");
    }
  }

  const value = {
    pokemonData,
    setPokemonData,
    getPokemonData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
