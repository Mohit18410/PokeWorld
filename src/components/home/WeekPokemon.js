import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spinner from "../Spinner";
import WeekPokemonData from "./WeekPokemonData";

const WeekPokemon = () => {
  const { pokemonData } = useContext(AppContext);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const dateComponents = formattedDate.split("/");
  const month = parseInt(dateComponents[0], 10);
  const day = parseInt(dateComponents[1], 10);
  const year = parseInt(dateComponents[2], 10);
  const todayPokemon = month + day + (year % 100) + Math.floor(year / 100) + 2;

  return (
    <div className="mx-8 my-4">
      <div className="text-3xl mb-12 lg:ml-10">This Week Pokemon</div>
      <div className="flex-horizontal">
        {pokemonData.length === 300 ? (
          <WeekPokemonData pokemon={pokemonData[todayPokemon]} />
        ) : (
          <div className=" shadow rounded-xl flex-horizontal-vertical w-2/6 h-full py-12">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeekPokemon;
