import React from "react";
import { useDispatch } from "react-redux";
import { setPokemonClicked } from "../../redux/slices/ClickedPokemonSlice";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setPokemonClicked(pokemon));
      }}
      className=" mt-8 p-2 flex-vertical flex-col border-2 border-slate-950 hover:cursor-pointer"
    >
      <div>
        <img src={pokemon.sprite} alt="Not Found" />
      </div>
      <div className=" mt-3 text-xl">{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
