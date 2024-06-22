import { configureStore } from '@reduxjs/toolkit'
import PokemonReducer from './features/PokemonSlice'

export const store = configureStore({
  reducer: {
    pokemonReducer: PokemonReducer,
  }
})

