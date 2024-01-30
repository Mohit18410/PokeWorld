import React, { useContext } from "react";
import ExploreCarousel from "./ExploreCarousel";
import { AppContext } from "../../context/AppContext";
import Spinner from "../Spinner";
import { FaArrowRight } from "react-icons/fa";

const Explore = () => {
  const { pokemonData } = useContext(AppContext);
  return (
    <div className=" my-32 mx-6">
      <div className=" mb-10 text-3xl lg:ml-14">Explore</div>
      <div className=" flex-horizontal mb-14">
        {pokemonData.length === 300 ? (
          <ExploreCarousel pokemons={pokemonData} />
        ) : (
          <div className="rounded-xl border-4 flex-horizontal-vertical w-2/6 h-full py-12">
            <Spinner />
          </div>
        )}
      </div>
      <div className=" flex flex-row-reverse">
        <button className="extra-button bg-slate-600 py-3 px-6 flex-vertical rounded-2xl">
          Extra
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Explore;
