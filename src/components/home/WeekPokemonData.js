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

  const textStyleClass = "text-2xl mb-2";

  return (
    <div className=" my-11 flex justify-center items-center">
      <div>
        <img src={sprite} alt="Not Found" />
      </div>
      <div>
        <div>
          <div className="text-5xl mb-4">{name}</div>
          <div className={textStyleClass}>Species: {species}</div>
          <div className="text-2xl mb-2 flex items-center">
            <div>Type :</div>
            <div>
              <DataTab element={types} />
            </div>
          </div>
          <div className="text-2xl mb-2 flex items-center">
            <div>Abilities:</div>
            <div>
              <DataTab element={abilityArray} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className={textStyleClass}>HP: {hp}</div>
            <div className={textStyleClass}>Attack: {attack}</div>
            <div className={textStyleClass}>Defense: {defense}</div>
          </div>
        </div>
        <div className="flex items-center">
          <button className=" border-4 border-black rounded-lg mr-3 p-2">
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
