import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);

  function getPokemonData() {
    axios
      .get("http://localhost:3001/data/v1/pokeData")
      .then((res) => {
        setPokemonData(res.data.data);
      })
      .catch(() => {
        console.log("Error in getting data");
      });
  }

  const value = {
    pokemonData,
    setPokemonData,
    getPokemonData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
