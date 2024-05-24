import { createSlice } from "@reduxjs/toolkit";

const ClickedPokemonSlice = createSlice({
  name: "pokemonClicked",
  initialState: {},
  reducers: {
    setPokemonClicked: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPokemonClicked } = ClickedPokemonSlice.actions;
export default ClickedPokemonSlice.reducer;
