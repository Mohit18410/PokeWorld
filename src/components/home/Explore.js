import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ExploreCarousel from "./ExploreCarousel";
import { AppContext } from "../../context/AppContext";
import Spinner from "../Spinner";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Explore = () => {
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      ochre: {
        main: "#252525",
        light: "#5d5959",
        dark: "#000000",
        contrastText: "#ffffff",
      },
    },
  });
  const { pokemonData } = useContext(AppContext);
  return (
    <div className=" my-24 mx-6">
      <div className=" mb-5 text-3xl lg:ml-14">Explore</div>
      <div className=" flex-horizontal mb-5">
        {pokemonData.length === 300 ? (
          <ExploreCarousel pokemons={pokemonData} />
        ) : (
          <div className="rounded-xl border-4 flex-horizontal-vertical w-2/6 h-full py-12">
            <Spinner />
          </div>
        )}
      </div>
      <div className=" flex flex-row-reverse">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="ochre"
            onClick={() => {
              navigate("/explorePokeworld");
            }}
          >
            Extra
            <FaArrowRight />
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Explore;
