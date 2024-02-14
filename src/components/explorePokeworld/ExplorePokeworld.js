import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import PokemonCard from "./PokemonCard";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";

const ExplorePokeworld = () => {
  const modalPokemon = useSelector((state) => state.pokemonClicked);
  useEffect(() => {
    if (Object.keys(modalPokemon).length) console.log(modalPokemon);
  }, [modalPokemon]);
  const { pokemonData } = useContext(AppContext);
  return (
    <div className=" flex flex-wrap gap-3 justify-center">
      {pokemonData ? (
        pokemonData.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={index} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ExplorePokeworld;
