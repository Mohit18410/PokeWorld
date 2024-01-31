import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import PokemonCard from "./PokemonCard";
import Spinner from "../Spinner";

const ExplorePokeworld = () => {
  const { pokemonData } = useContext(AppContext);
  return (
    <div className=" flex flex-wrap gap-3 justify-center">
      {pokemonData ? (
        pokemonData.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ExplorePokeworld;
