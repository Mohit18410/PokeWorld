import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import PokemonCard from "./PokemonCard";
import Spinner from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonClicked } from "../../redux/slices/ClickedPokemonSlice";
import Modal from "@mui/material/Modal";
import PokeModalWindow from "./PokeModalWindow";
import { AiOutlineClose } from "react-icons/ai";
import { Header } from "../Header";
import Footer from "../footer/Footer";

const ExplorePokeworld = () => {
  const dispatch = useDispatch();
  const clickedPokemonData = useSelector((state) => state.pokemonClicked);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(setPokemonClicked({}));
  };

  useEffect(() => {
    if (Object.keys(clickedPokemonData).length) {
      handleOpen();
    } else {
      setOpen(false);
    }
  }, [clickedPokemonData]);

  const { pokemonData } = useContext(AppContext);
  return (
    <div className=" h-screen">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <AiOutlineClose
            size={20}
            className=" absolute top-2 right-2 fill-gray-400 hover:cursor-pointer"
            onClick={handleClose}
          />
          {Object.keys(clickedPokemonData).length ? (
            <PokeModalWindow pokemon={clickedPokemonData} />
          ) : (
            <div>No Data</div>
          )}
        </div>
      </Modal>
      <Header />
      <div className=" flex-horizontal flex-wrap gap-3">
        {pokemonData ? (
          pokemonData.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={index} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ExplorePokeworld;
