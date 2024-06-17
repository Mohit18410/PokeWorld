import React, { useState } from "react";
import DataTab from "./DataTab";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeekPokemonData = ({ pokemon }) => {
  const { name, species, sprite, types, abilities, baseStats } = pokemon;
  const { hp, attack, defense } = baseStats;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const abilityArray = [];
  function abilitiesArray(abilities) {
    abilities.map((ability) => abilityArray.push(ability.name));
  }
  abilitiesArray(abilities);

  const textStyleClass = " text-lg lg:text-2xl sm:text-xl mb-2";

  const toggleAdded = () => {
    setIsAdded(!isAdded);
    console.log(isAdded);
    if (!isAdded) {
      toast.success("Pokemon Added to collection");
    } else {
      toast.error("Pokemon removed from collection");
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
    if (!isFavorite) {
      toast.success("Pokemon Added to favourite");
    } else {
      toast.error("Pokemon removed from favourite");
    }
  };

  return (
    <>
      <div className=" today-poke-card rounded-xl p-10 lg:p-14 flex-horizontal-vertical flex-wrap shadow bg-white">
        <div className="pokeimage min-w-max">
          <img src={sprite} alt="Not Found" />
        </div>
        <div>
          <div>
            <div className=" text-3xl lg:text-5xl sm:text-4xl text-center mb-4">
              {name}
            </div>
            <div className={textStyleClass}>Species: {species}</div>
            <div className="text-lg lg:text-2xl sm:text-xl mb-2 flex-vertical">
              <div>Type :</div>
              <div>
                <DataTab element={types} />
              </div>
            </div>
            <div className=" text-lg lg:text-2xl sm:text-xl mb-2 flex-vertical">
              <div>Abilities:</div>
              <div>
                <DataTab element={abilityArray} />
              </div>
            </div>
            <div className="flex-vertical justify-between">
              <div className={textStyleClass}>HP: {hp}</div>
              <div className={textStyleClass}>Attack: {attack}</div>
              <div className={textStyleClass}>Defense: {defense}</div>
            </div>
          </div>
          <div className="flex-vertical gap-5">
            <Button
              onClick={toggleAdded}
              variant="contained"
              color="success"
              className=" h-10"
            >
              Add To Collection
            </Button>
            <Button
              variant="outlined"
              color="error"
              className=" h-10 w-8"
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default WeekPokemonData;
