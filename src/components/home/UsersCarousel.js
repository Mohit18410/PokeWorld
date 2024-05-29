import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { IoPersonSharp } from "react-icons/io5";

const UsersCarousel = ({ users }) => {
  return (
    <div className=" w-3/4">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          pagination: false,
          drag: "free",
          pauseOnHover: true,
          lazyLoad: "nearby",
        }}
        aria-label="Images"
      >
        {users.map((user, index) => {
          return (
            <SplideSlide key={index} className=" flex-horizontal-vertical ">
              <div className=" p-16 flex-horizontal-vertical flex-wrap gap-20 border-4 border-slate-800 rounded-xl">
                <IoPersonSharp size={80} />
                <div>
                  <div>
                    <span>Name: </span>
                    {user.name}
                  </div>
                  <div>
                    <span>Pokemon Collected: </span>
                    {user.pokemonCollected}
                  </div>
                  <div>
                    <span>Rank: </span>
                    {user.rank}
                  </div>
                  <div>
                    <span>First Pokemon: </span>
                    {user.firstPokemon}
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default UsersCarousel;
