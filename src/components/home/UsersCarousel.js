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
          width: "100vw",
          height: "30vw",
          pagination: false,
          drag: "free",
          pauseOnHover: true,
          lazyLoad: "nearby",
        }}
        aria-label="Images"
      >
        {users.map((user, index) => {
          return (
            <SplideSlide
              key={index}
              className="  flex-horizontal-vertical border-4 border-slate-800 rounded-xl"
            >
              <div className=" w-full">
                <div className=" w-full flex-horizontal-vertical md:flex-row flex-col gap-20">
                  <div className=" w-2/5 flex-horizontal-vertical">
                    <IoPersonSharp className=" w-2/5 h-2/5" />
                  </div>
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
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default UsersCarousel;
