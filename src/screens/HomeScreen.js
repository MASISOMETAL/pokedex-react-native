import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../store/features/PokemonSlice'
import { ListPokemon } from '../components'
import FetchApiPokemon from '../utils/FetchApiPokemon'
import SeasonsButtons from '../components/SeasonsButtons'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const [currenSeasons, setCurrenSeasons] = useState([0, 151])
  const [isLoadingSeason, setIsLoadingSeason] = useState(false)
  const pokemons = useSelector(state => state.pokemonReducer.pokemons)

  useEffect(() => {
    (async () => {
      setIsLoadingSeason(true)
      const result = await FetchApiPokemon(currenSeasons)

      dispatch(getPokemons(result))
      setIsLoadingSeason(false)
    })()
  }, [currenSeasons])

  return (
    <View style={styles.container}>

      <SeasonsButtons isLoadingSeason={isLoadingSeason} setCurrenSeasons={setCurrenSeasons} />

      {isLoadingSeason ?
        <View style={styles.loadgin}>
          <ActivityIndicator size="large" />
        </View>
        :
        <FlatList
          data={pokemons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ListPokemon item={item} />}
        />
      }

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadgin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})