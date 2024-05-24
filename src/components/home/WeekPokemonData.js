import React from "react";
import { FaHeart } from "react-icons/fa";
import DataTab from "./DataTab";

const WeekPokemonData = ({ pokemon }) => {
  const { name, species, sprite, types, abilities, baseStats } = pokemon;
  const { hp, attack, defense } = baseStats;

  const abilityArray = [];
  function abilitiesArray(abilities) {
    abilities.map((ability) => abilityArray.push(ability.name));
  }
  abilitiesArray(abilities);

  const textStyleClass = " text-lg lg:text-2xl sm:text-xl mb-2";

  return (
    <div className=" rounded-xl p-14 flex-vertical justify-around shadow bg-white">
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
          <div className="text-lg lg:text-2xl sm:text-xl mb-2 flex-vertical">
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
        <div className="flex-vertical">
          <button className=" border-4 border-black rounded-lg mr-3 lg:p-2 p-1">
            Add To Collection
          </button>
          <button>
            <FaHeart
              size={34}
              className=" fill-red-600 border-2 border-black rounded-sm p-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekPokemonData;
