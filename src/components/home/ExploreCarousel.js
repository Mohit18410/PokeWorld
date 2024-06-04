import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import Spinner from "../Spinner";
import "./home.css";
import "./explore.css";

const ExploreCarousel = ({ pokemons }) => {
  const [carouselPokemon, setCarouselPokemon] = useState([]);

  useEffect(() => {
    if (pokemons.length === 300) {
      const randomPokemons = [];
      for (let i = 0; i < 30; i++) {
        const randomIndex = Math.floor(Math.random() * 300);

        if (!randomPokemons.includes(pokemons[randomIndex]))
          randomPokemons.push(pokemons[randomIndex]);
      }

      setCarouselPokemon(randomPokemons);
    }
  }, [pokemons]);

  return (
    <div>
      {carouselPokemon.length >= 10 ? (
        <Splide
          options={{
            type: "loop",
            perPage:
              window.innerWidth >= 1024 ? 3 : window.innerWidth >= 700 ? 2 : 1,
            focus: "center",
            gap: "5em",
            autoplay: true,
            width: "90vw",
            drag: false,
            pagination: false,
            pauseOnHover: true,
            lazyLoad: "nearby",
          }}
          aria-label="Images"
        >
          {carouselPokemon.map((ele, index) => {
            return (
              <SplideSlide
                key={index}
                className=" flex-horizontal-vertical py-5"
              >
                <div className="pokedex-container flex-horizontal-vertical p-3 w-full max-w-xs min-w-fit rounded-3xl">
                  <div className="flex-horizontal-vertical flex-col">
                    <div className="pokedex-image flex-horizontal-vertical bg-neutral-900 w-max max-h-max ">
                      <img src={ele.sprite} alt="Not found" />
                    </div>
                    <div className="poke-details xl:mt-12 mt-8">
                      <div className="poke-name rounded-md">{ele.name}</div>
                      <div className="poke-ability flex-horizontal-vertical flex-col rounded-md">
                        {ele.abilities.map((ability) => {
                          return <div key={ability.name}>{ability.name} </div>;
                        })}
                      </div>
                      <div className="poke-species rounded-md">
                        {ele.species}
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ExploreCarousel;
