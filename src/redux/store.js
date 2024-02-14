import { configureStore } from "@reduxjs/toolkit";
import ClickedPokemonSlice from "./slices/ClickedPokemonSlice";

export const store = configureStore({
  reducer: {
    pokemonClicked: ClickedPokemonSlice,
  },
});
