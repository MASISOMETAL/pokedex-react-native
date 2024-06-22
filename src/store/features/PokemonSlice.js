import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: []
}

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    getPokemons: (state, actions) => {
      state.pokemons = actions.payload
    },
  }
})

export const { getPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer