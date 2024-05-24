import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import PokemonCard from "./PokemonCard";
import Spinner from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonClicked } from "../../redux/slices/ClickedPokemonSlice";
import Modal from "@mui/material/Modal";
import WeekPokemonData from "../home/WeekPokemonData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          {Object.keys(clickedPokemonData).length ? (
            <WeekPokemonData pokemon={clickedPokemonData} />
          ) : (
            <div>No Data</div>
          )}
        </div>
      </Modal>
      <div className=" flex flex-wrap gap-3 justify-center">
        {pokemonData ? (
          pokemonData.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={index} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ExplorePokeworld;
