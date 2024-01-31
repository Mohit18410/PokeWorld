import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className=" mt-8 p-2 flex flex-col items-center border-2 border-slate-950 hover:cursor-pointer">
      <div>
        <img src={pokemon.sprite} alt="Not Found" />
      </div>
      <div className=" mt-3 text-xl">{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
