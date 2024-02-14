import { createSlice } from "@reduxjs/toolkit";

const ClickedPokemonSlice = createSlice({
  name: "pokemonClicked",
  initialState: {},
  reducers: {
    setPokemonClicked: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setPokemonClicked } = ClickedPokemonSlice.actions;
export default ClickedPokemonSlice.reducer;
